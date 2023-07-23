let playerOption;
let cpuOption;

function setPlayerOption(option){
    let message = document.getElementById("response");
    playerOption = option;
    message.textContent = `Player has selected ${option}`
}


function playGame(){
    player = document.getElementById("response");
    opponent = document.getElementById("opponent");
    result = document.getElementById("result");
    if (!playerOption){
        player.textContent = "Please select an Option"
    }else{
        cpuOption = getCpuOption();
        opponent.textContent = `CPU has selected ${cpuOption}`
        if ((playerOption == "rock" && cpuOption == "paper") || (playerOption == "paper" && cpuOption == "scissors") || (playerOption == "scissors" && cpuOption == "rock")){
            result.textContent = "You Lose"
        }
        else if ((playerOption == "rock" && cpuOption == "scissors") || (playerOption == "paper" && cpuOption == "rock") || (playerOption == "scissors" && cpuOption == "paper")){
            result.textContent = "You Win"
        }
        else{
            result.textContent = "Its a tie !!"
        }
    }
    

}

function getCpuOption(){
    const availableOptions = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random()*3);
    return availableOptions[randomIndex];
}



document.getElementById("rock").addEventListener("click", function(){
    setPlayerOption("rock");
    console.log("works");
});
document.getElementById("paper").addEventListener("click", function(){
    setPlayerOption("paper");
});
document.getElementById("scissors").addEventListener("click", function(){
    setPlayerOption("scissors");
});
document.getElementById("playButton").addEventListener("click", playGame);
document.getElementById("resetButton").addEventListener("click", () =>{
    let player = document.getElementById("response");
    let opponent = document.getElementById("opponent");
    let result = document.getElementById("result");
    player.textContent = "Player has selected";
    opponent.textContent = "CPU has selected";
    result.textContent = "";
});