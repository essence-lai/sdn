"use client"

// React Imports
import { useState } from 'react'

// Nextjs imports
import Image from 'next/image';

// MaterialUI Imports
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal'

// List of Countries for the select field of the form
import listOfCountries from '@/utils/listOfCountries'
import { FlashOnRounded } from '@mui/icons-material';

export default function SdnForm() {
    const [selectedCountry, setSelectedCountry] = useState('')
    const [fullName, setFullName] = useState('')
    const [birthYear, setBirthYear] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [results, setResults] = useState({})

    const isFormValid = () => {
        if (!fullName || !birthYear || !selectedCountry) {
            return false;
        }

        // Birth Year should not be in the future or too far in the past
        const currentYear = new Date().getFullYear(); 
        const minBirthYear = 1800; 
        if ( isNaN(birthYear) ||parseInt(birthYear) < minBirthYear || parseInt(birthYear) > currentYear) {
            return false;
        }

        // Fullname should contain at least first and last
        const fullNameWords = fullName.split(' ');
        if (fullNameWords.length < 2) {//Ensure 
            return false;
        }
        
        return true;
    };

    const handleChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const handleSubmit =  async (event) => {
        event.preventDefault()
        const rawResponse = await fetch('/api', {
                method: 'POST',
                body: JSON.stringify({name: fullName, dob: String(birthYear), country: selectedCountry})
            });
        
        const content = await rawResponse.json();
        setResults(content)
        setShowModal(true)

    }
    
    const handleClose = () => {
        setFullName("")
        setBirthYear("")
        setSelectedCountry("")
        setShowModal(false)
    }

    const resultHit = () =>{
        if (!results.name && !results.dob && !results.country){
            return false
        }
        return true
    }


    return (
        <main>
            <div className="flex items-center justify-center h-screen">
                <Box className="w-full max-w-md p-8 bg-white rounded space-y-3" style={{ border: '2px solid #fca930', borderBottomWidth: '12px', borderRightWidth: '10px', borderRadius: '15px' }}>
                    <Image src="./trust.svg" alt="Organization logo" width="100" height="100" sizes="100vw" className="w-1/4 h-auto"/>
                    <Typography variant="h4" className="font-extrabold">
                        SDN Check
                    </Typography>
                    <Typography variant="body1"> We are re committed to your security. This form checks your information against the our records to ensure compliance.</Typography>
                    <TextField
                        required
                        id="full-name"
                        label="Full Name"
                        variant="outlined"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <TextField
                        required
                        id="birth-year"
                        label="Birth Year"
                        variant="outlined"
                        value={birthYear}
                        maxLength="4"
                        onChange={(e) => setBirthYear(e.target.value)}
                    />
                    <FormControl fullWidth >
                        <InputLabel
                        id="country-select-label"
                        required
                        >
                        Country
                        </InputLabel>
                        <Select
                        className='w-1/2 max-w-[300px] mx-auto"'
                        labelId="country-select-label"
                        id="country-select"
                        value={selectedCountry}
                        label="Country"
                        onChange={handleChange}
                        >
                        {listOfCountries.map((country) => (
                            <MenuItem
                            key={country}
                            value={country}
                            >
                            {country}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    <Button
                        variant="contained"
                        className='text-sky-600'
                        onClick={handleSubmit}
                        size='large'
                        disabled={!isFormValid()}
                        endIcon={<ArrowForwardIcon />}
                    >
                        Submit
                    </Button>

                    { showModal && 
                        <Modal
                            open={showModal}
                            onClick={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            {
                                resultHit() ? 
                                <Box sx={{width: '450px', p: 3, mx: 'auto', mt: 10, bgcolor: 'background.paper', border: '2px solid #fca930', borderRadius: '15px'}}>
                                    <Typography variant="h4" className="mb-3 font-extrabold">Hit</Typography>
                                    <Typography variant="body1" className="mb-3">Name: { results.name ? "✅" : "❌"  } </Typography>
                                    <Typography variant="body1" className="mb-3">DOB: { results.dob ? "✅" : "❌"  } </Typography>
                                    <Typography variant="body1" className="mb-3">Country: { results.country ? "✅" : "❌"  } </Typography>
                                </Box>:
                                <Box sx={{width: '450px', p: 3, mx: 'auto', mt: 10, bgcolor: 'background.paper', border: '2px solid #fca930', borderRadius: '15px'}}>
                                    <Typography variant="h4" className="mb-3 font-extrabold">Clear</Typography>
                                </Box>
                            }
                        </Modal>
                    }
                </Box>
            </div>
        </main>
    )
}

