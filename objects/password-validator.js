//exploring string methods

let isValidPassword = function(password){
    return !password.includes('password') && password.length >=8
}

console.log(isValidPassword('123'))
console.log(isValidPassword('123passwordaa'))
console.log(isValidPassword('123bjssjcs'))
console.log(isValidPassword('qsxaazascdc'))