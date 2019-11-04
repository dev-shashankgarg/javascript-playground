let firstName = 'Shashank'
let lastName = 'Garg'
let fullName = firstName + ' ' +lastName
console.log(fullName)

let city = 'Bangalore'
let country = 'India'
let location = city + ', '+country
console.log(location)

//using string template

let calculateTip = function(total , tip = 0.2){
    let tipPay = total * tip
    console.log(`A ${tip * 100}% tip on $${total} bill would be $${tipPay}`)
    return tipPay
}

calculateTip(100)