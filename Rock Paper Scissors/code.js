let userScore = 0;
let compScore = 0;

let mode = document.querySelector("#mode");
let current_mode = "light";

mode.addEventListener("click",()=>{
    if(current_mode ==="light"){
        current_mode = "dark";
        document.querySelector("body").style.backgroundColor="#153448";
       const color =  document.querySelectorAll("p");
        for(let i=0;i< color.length;i++){
               color[i].style.color = "white";
        }
    }
    else if(current_mode === "dark"){
        current_mode = "light";
        document.querySelector("body").style.backgroundColor="#fff";
        const color =  document.querySelectorAll("p");
        for(let i=0;i< color.length;i++){
               color[i].style.color = "black";
        }
    }

});

const msg = document.querySelector("#msg");

const userscoreline = document.querySelector("#user-score");
const compscoreline = document.querySelector("#comp-score");

const getComputerchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
};

const playGame = (user) => {
    console.log("User choice: ", user);
    const comp = getComputerchoice();
    console.log("Computer choice: ", comp);

    if (user === comp) {
        msg.innerText="Game was Draw. Play again"
        msg.style.backgroundColor = "#F2613F";
        msg.style.opacity ="0.4";
    } else {
        let userWin = true;
        if (user === "rock") {
            userWin = comp === "paper" ? false : true;
        } else if (user === "paper") {
            userWin = comp === "scissors" ? false : true;
        } else {
            userWin = comp === "rock" ? false : true;
        }
        Winner(userWin, user, comp); 
    }
};

const Winner = (userWin, user, comp) => { 
    if (userWin) {
        userScore++;
        userscoreline.innerText = userScore;
        msg.innerText = `You win! Your ${user} beats ${comp}`;
        msg.style.backgroundColor = "green";
        msg.style.opacity ="0.4";
    } else {
        compScore++;
        compscoreline.innerText = compScore;
        msg.innerText = `You lost. ${comp} beats your ${user}`;
        msg.style.backgroundColor = "red";
        msg.style.opacity ="0.4";
    }
};

const choose = document.querySelectorAll(".choice");
choose.forEach((choice) => {
    choice.addEventListener("click", () => { 
        const user = choice.getAttribute("id");
        console.log("choice was clicked", user);
        playGame(user);
    });
});
