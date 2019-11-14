`use strict`

const getCountry = (countryCode) => fetch('https://restcountries.eu/rest/v2/all' , {}).then(response => {
    if(response.status === 200){
        return response.json()
    }else{
        throw new Error('un-successful response code!!')
    }
}).then(data => data.find(country => country.alpha2Code === countryCode ) )

document.querySelector('#countryFetchForm').addEventListener('submit' , event => {
    event.preventDefault()
    getCountry(event.target.elements.shortCode.value).then(data => {
        if(data){
            console.log(data.name)
        }else{
            throw new Error('country could not be found')
        }
    }).catch((err) => {
        console.log(err.message)
    })
})