class Location {
    constructor(country , city){
        this.country = country
        this.city = city
    }
    get details(){
        return `${this.city},${this.country}`
    }
}

const myLocation = new Location('India' , 'Bengaluru')
console.log(myLocation.details)

