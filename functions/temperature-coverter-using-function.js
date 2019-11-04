let fahrenheitToCelcius = function(fahrenheit){
    return (fahrenheit - 32) * (5/9)
}

let fahrenheitToKelvin = function(fahrenheit){
    return (fahrenheit + 459.67) * (5/9)
}

console.log(fahrenheitToCelcius(32))
console.log(fahrenheitToKelvin(32))