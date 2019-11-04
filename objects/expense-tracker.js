let myAccount = {
    name: 'Shashank Garg',
    expense: 0,
    income: 0
}

let addExpense = function(account, amount){
    account.expense += amount
}

let addIncome = function(account, amount){
    account.income += amount
}

let resetAccount = function(account){
    account.expense= 0
    account.income= 0
}

let summarizeAccount = function(account){
    console.log(`${account.name} has $${account.income - account.expense} balance. Income: $${account.income} , Expense: $${account.expense}`)
}

addExpense(myAccount,250)
addExpense(myAccount,42)
addIncome(myAccount,900)
summarizeAccount(myAccount)
resetAccount(myAccount)
summarizeAccount(myAccount)
