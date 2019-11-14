const getLocation = (token) => fetch(`https://ipinfo.io/json?token=${token}`).then(reponse => {
    if(reponse.status === 200){
        return reponse.json()
    }else{
        throw new Error('could not fetch ip info')
    }
})

document.querySelector('#locationBtn').addEventListener('click' , event => {
    getLocation('2ad2b2ce650dc3').then(data => {console.log(`city: ${data.city}, country: ${data.country}, region: ${data.region}`)
    return getCountry(data.country)
}).then( data => {
    console.log(`chained promise to get country: ${data.name}`)
})
    .catch((err) => console.log(err.message))
})