'use strict'

// using strict mode has various benefits
// 1) will throw error when we mistakedly leak global variables
// will not let use of some reserved identifiers for future like public

const func = ()=>{
    data ='abc'
}

try{
func()
}catch(ex){
    console.log(`would have worked without strict mode. but now : ${ex.message}`)
}

const public = 'some data'  // would have worked without strict mode
