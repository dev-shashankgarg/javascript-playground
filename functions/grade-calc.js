const calculateGrade = function(score , totalScore = 100){
    const scorePercent = score / totalScore

    if(scorePercent >= 0.9){
        return printMessage('A',scorePercent)
    }else if(scorePercent >= 0.8){
        return printMessage('B',scorePercent)
    }else if(scorePercent >= 0.7){
        return printMessage('C',scorePercent)
    }else if(scorePercent >= 0.6){
        return printMessage('D',scorePercent)
    }else{
        return printMessage('E',scorePercent)
    }
}

const printMessage = function(grade , scorePercent){
    return `You got a ${grade} (${scorePercent * 100}%)!`
}

console.log(calculateGrade(41))
console.log(calculateGrade(41,41))