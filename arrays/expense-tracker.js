const accountInfo = {
    name: 'Shashank Garg',
    incomes:[],
    expenses: [],
    addIncome: function(description,amount) {
        this.incomes.push({
            description: description,
            amount: amount
        })
    },
    addExpense: function(description,amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    expenseSummary: function() {
        let expenseTotal = 0
        this.expenses.forEach((val) => expenseTotal+=val.amount)

        let incomesTotal = 0
        this.incomes.forEach((val) => incomesTotal+=val.amount)

        console.log(`${this.name} has $${expenseTotal} in expenses and $${incomesTotal} in incomes.`)
        // this.incomes.forEach((val) =>  console.log(JSON.stringify(val)))
        // this.expenses.forEach((val) =>  console.log(JSON.stringify(val)))

        console.log(`Total Balance: $${incomesTotal - expenseTotal}`)
        

    }

}

    accountInfo.expenseSummary()
    accountInfo.addExpense('Rent' , 950)
    accountInfo.addExpense('Coffee', 2)
    accountInfo.addIncome('Wage', 1200)

    accountInfo.expenseSummary()

