

function rockMessage(){
    let a = document.getElementById("response")
    let res = document.getElementById("result")
    let playerOption = "rock"
    let msg = ""
    a.textContent = "You Selected Rock"
    cpuOption = chooseCpu()
    if (playerOption === cpuOption){
        msg = "Draw"
    }
    else{
        let sc = compareRock(playerOption, cpuOption)
        if (sc === 1){
            msg = "Win"
        }
        else{
            msg = "Lose"
        }
    }
    res.textContent = `Result : ${msg}`


}

function paperMessage(){
    let a = document.getElementById("response")
    
    let res = document.getElementById("result")   
    let playerOption = "paper"
    let msg = ""
    a.textContent = "You Selected Paper"
    cpuOption = chooseCpu()
    if (playerOption === cpuOption){
        msg = "Draw"
    }
    else{
        let sc = comparePaper(cpuOption)
        if (sc === 1){
            msg = "Win"
        }
        else{
            msg = "Lose"
        }
    }
    res.textContent = `Result : ${msg}`
}

function scissorsMessage(){
    let a = document.getElementById("response")
    
    let res = document.getElementById("result")
    let playerOption = "scissors"
    let msg = ""
    a.textContent = "You Selected Scissors"
    cpuOption = chooseCpu()
    if (playerOption === cpuOption){
        msg = "Draw"
    }
    else{
        let sc = compareScissors(cpuOption)
        if (sc === 1){
            msg = "Win"
        }
        else{
            msg = "Lose"
        }
    }
    res.textContent = `Result : ${msg}`
}

function chooseCpu(){
    let op = document.getElementById("opponent")
    let optionsArray = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random()*3)
    op.textContent = "CPU selected " + optionsArray[randomIndex]
    return optionsArray[randomIndex]
}

function compareRock(option){
    if (option === "scissors"){
        return 1
    }
    else if (option === "paper"){
        return 0
    }
}

function comparePaper(option){
    if (option === "rock"){
        return 1
    }
    else if (option === "scissors"){
        return 0
    }
}

function compareScissors(option){
    if (option === "paper"){
        return 1
    }
    else if (option === "rock"){
        return 0
    }
}