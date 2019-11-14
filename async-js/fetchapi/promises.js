setTimeout(()=> {
    console.log('The time is up first example')
} , 5000)


const waitExec = (callback) => {
    setTimeout(()=> {
        callback(undefined ,'The time is up second example')
    } , 2000)
}


waitExec( (error , result) => {
    if(error){
        console.log('error has occured')
    }else{
        console.log(result)
    }
})

// above are standard techniques working with async processes

// next is Promise technique

const myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('This is promise in action!!')
    },2000)
})

myPromise.then((data) => {
    console.log(data)
})