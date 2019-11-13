`use strict`

const getCountry = (shortId , callback) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange' , event => {
        if(event.target.readyState === 4 && event.target.status === 200){
            const data = event.target.responseText
            const countries = JSON.parse(data)
            const foundCountry =  countries.find(country => {
                return country.alpha2Code === shortId
            })
            if(foundCountry){
                callback(undefined , foundCountry.name)
            }
            else{
                callback(new Error('could not fetch such country!!'))
            }
        }
    })
    request.open('GET' , 'https://restcountries.eu/rest/v2/all')
    request.send()
}

document.querySelector('#countryFetchForm').addEventListener('submit' , event => {
    event.preventDefault()
    getCountry(event.target.elements.shortCode.value , (error , country) => {
        if(error){
            console.log('could not fetch country')
        }else{
            console.log(country)
        }
    })
})