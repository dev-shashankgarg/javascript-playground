let name
console.log(name)

if(name === undefined){
    console.log('Variable \'name\' is undefined')
}else{
    console.log(name)
}


// return type is missing,will return undefined
let square = function(number){
    console.log(number * number)
}

let result = square(3)

console.log('result value is: '+result)