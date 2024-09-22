let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const getCompChoice = () => {
    const option=["Rock","Paper","Scissors"];
    const randIdx=Math.floor(Math.random() * 3);
    return option[randIdx];
};

const drawGame = () =>{
    msg.innerText="Game was Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner =(userwin,userChoice,compChoice) =>{
if(userwin){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
}else{
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText=`You lost! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
}
};

const playGame=(userChoice)=>{
    const compChoice=getCompChoice();
    console.log(" user choice msg",userChoice);

    console.log(" comp choice msg",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userwin="true";
        if(userChoice==="Rock"){
            userwin= compChoice==="Paper" ? false : true;
        }else if(userChoice==="Paper"){
         userwin=compChoice==="Scissor" ? false : true;
        }else{
            userwin=compChoice==="Rock" ? false : true;
    }
    showWinner(userwin, userChoice, compChoice);
}
};

choices.forEach((choice) =>{
    choice.addEventListener("click" ,() =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
