// learning java script methods

let restaurant = {
    name: 'Chipotle Blast',
    guestCapacity: 70,
    currentOccupancy: 0,
    checkAvailability: function(guestCount){
        return guestCount <= (this.guestCapacity-this.currentOccupancy)
    },
    addGuests: function(guestCount){
        this.currentOccupancy+=guestCount
    },
    removeGuests: function(guestCount){
        this.currentOccupancy-=guestCount
    }
}

restaurant.addGuests(68)
console.log(`Availabilty Status: ${restaurant.checkAvailability(4)}`)

restaurant.removeGuests(3)
console.log(`Availabilty Status: ${restaurant.checkAvailability(4)}`)


 