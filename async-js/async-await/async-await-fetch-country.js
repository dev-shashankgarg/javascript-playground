getCountry = async (countryCode) => {
    const response = await fetch('https://restcountries.eu/rest/v2/all')
    if(response.status === 200){
        const data =  await response.json()
        const foundCountry = data.find(country => country.alpha2Code === countryCode)
        if(foundCountry){
            return foundCountry.name
        }else{
            throw new Error(`could not find such country with code: ${countryCode}`)
        }
    }else{
        throw new Error('could not fetch data: network IO issue')
    }
}

document.querySelector('#countryFetchForm').addEventListener('submit' , event => {
    event.preventDefault()
    getCountry(event.target.elements.shortCode.value).then(data => {
    console.log(data)
    }).catch(err => console.log(err.message))
})