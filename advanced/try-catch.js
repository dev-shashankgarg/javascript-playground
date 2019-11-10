const getTip = (amount = 1) => {
    if(typeof amount === 'number'){
    return amount * 0.25
    }else{
        throw Error(`Argument must be number but it was ${typeof amount}`)
    }
}

console.log(getTip())
console.log(getTip(undefined))
console.log(getTip(NaN))
try{
console.log(getTip(null))
}catch(ex){
    console.log(`can not calculate tip on null amount:  ${ex.message}`)
}
console.log(getTip(100))