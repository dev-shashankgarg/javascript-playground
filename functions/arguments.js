//default arguments

let calculateTip = function(total , tip = 0.2){
    return total * tip;
}

console.log(calculateTip(100))
console.log(calculateTip())
console.log(calculateTip(undefined, 0.5))
console.log(calculateTip(100, 0.5))

