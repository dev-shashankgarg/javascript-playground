const someDate = new Date('December 10 1994 00:20:00')
const someDate1 = new Date('Novemebr 9 2019 09:06:00')

const someDateTime = someDate.getTime()
const someDate1Time = someDate1.getTime()

if(someDate1Time < someDateTime){
    console.log(someDate1.toString())
}else{
    console.log(someDate.toString())
}