getLocation = async (token) => {
    const response = await fetch(`https://ipinfo.io/json?token=${token}`)
    if(response.status === 200){
        const data =  await response.json()
        const country = await getCountry(data.country)
        return `Your IP Location is ${data.city}, ${data.region} [${country}]`
    }else{
        throw new Error('could not fetch data: network IO issue')
    }
}

document.querySelector('#locationBtn').addEventListener('click' , event => {
    getLocation('2ad2b2ce650dc3').then(data => console.log(data)).catch(err => console.log(err.message))
})