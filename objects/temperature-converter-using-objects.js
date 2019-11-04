let calculateTempUsingFahrenhiet = function(fahrenhiet){
    return {
        'fahrenhiet':fahrenhiet,
        'celcius': (fahrenhiet - 32) * (5/9),
        'kelvin': (fahrenhiet + 459.67) * (5/9)
    }
}

let summarizeTemp = function(tempObj){
    console.log(`${tempObj.fahrenhiet} Fahrenhiet equals to ${tempObj.celcius} Celcius and ${tempObj.kelvin} Kelvin`)
}

summarizeTemp(calculateTempUsingFahrenhiet(32))
summarizeTemp(calculateTempUsingFahrenhiet(74))