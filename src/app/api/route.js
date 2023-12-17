export const dynamic = 'force-dynamic' // defaults to auto
const FULLNAME = 'fullName'
const NAME = 'name'
const DOB = 'dob'
const MATCHES = 'matches'
const COUNTRY = 'country'
const ADDRESSES = 'addresses'

export async function POST(req, res) {
    const user = await req.json()
    const results = {
        name: false,
        dob: false,
        country: false
    }

    res = await fetch('https://search.ofac-api.com/v3/', {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
            'apiKey': process.env.DATA_API_KEY
        },
        body: JSON.stringify({
                "minScore": 95,
                "source": ["SDN"],
                "cases": [{
                    "name": user[NAME],
                    "dob": user[DOB].concat("-01-01") ,
                    "address": {
                        "country": user[COUNTRY]
                    }
                }]
            }),
    })

    if (!res.ok) {
        throw new Error(res.status)
    }

    const data = await res.json()
    
    if (data.hasOwnProperty(MATCHES) && data[MATCHES].hasOwnProperty(user[NAME]) && data[MATCHES][user[NAME]].length > 0 ) {
        for (var match of data.matches[user[NAME]]){
            isMatching(match, FULLNAME, NAME, user, results)
            isMatching(match, DOB, DOB, user, results)
            if (match.hasOwnProperty(ADDRESSES) && match[ADDRESSES].length > 0 ){
                for (var address of match[ADDRESSES]){
                    isMatching(address, COUNTRY, COUNTRY, user, results)
                }
            }
        }
    }
    console.log(results)
    return new Response(JSON.stringify(results))
}

/**
 * Determines if the user's information matches 
 * the results returned from OFAC APi
 * 
 * @param {Object} match [Match Object retrieved from OFAC API]
 * @param {String} inputPath [Input path  to check]
 * @param {String} resultPath [Resulting object path to return]
 * @param {Object} user [Input user information]
 * @param {Object} results [Output results]
 */
function isMatching(match, inputPath, resultPath, user, results){
    if (match.hasOwnProperty(inputPath) && match[inputPath].toLowerCase().includes(user[resultPath].toLowerCase()) ) {
        results[resultPath] = true
    }
}