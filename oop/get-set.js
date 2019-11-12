const data = {
    _location: '',
    get location(){
        return this._location
    },
    set location(value){
        this._location = value
    }
}

data.location = 'Bangalore'
console.log(data.location)
console.log(data)