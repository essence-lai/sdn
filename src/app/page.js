'use client'
import Link from 'next/link'

export default function Home() {
    const makeApiCall = async () => {
        await fetch('/api', {
            method: 'POST',
            body: JSON.stringify({name: 'Alexander Vasilievich', dob: String(1951), country: 'Russia'})
        })
    }

    return <button onClick={makeApiCall}> make call</button>
}