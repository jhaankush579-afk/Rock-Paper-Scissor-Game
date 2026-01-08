let choices = document.querySelectorAll(".choice");
let msgBox = document.querySelector(".msg-container");
let resultMsg = document.getElementById("msg");
let yourShow = document.getElementById("your-choice");
let compShow = document.getElementById("comp-choice");
let yourScore = document.getElementById("user-points")
let compScore = document.getElementById("comp-points");

let userPoints = 0;
let compPoints = 0;

const getCompChoice = () => {
  let gameChoice = ["rock" , "paper" , "scissor"];
  let randomIdx = Math.floor(Math.random() * 3);
  return gameChoice[randomIdx];
}

const playgame = (yourChoice , compChoice) => {
  let userWin = true;

  if (yourChoice === "rock") {
    userWin = compChoice === "paper" ? false : true;
  }
  else if (yourChoice === "paper") {
    userWin = compChoice === "rock" ? true : false;
  }
  else if (yourChoice === "scissor") {
    userWin = compChoice === "paper" ? true : false;
  }

  return userWin;
}

const showResult = (userWin) => {
    if(userWin) {
        userPoints++;
        resultMsg.innerHTML = "Winner!"
        resultMsg.style.backgroundColor = "green";
        resultMsg.style.color = "white"
        yourScore.innerHTML = userPoints;
    }

    else {
        compPoints++;
        resultMsg.innerHTML = "Looser!";
        resultMsg.style.backgroundColor = "red";
        resultMsg.style.color = "white"
        compScore.innerHTML = compPoints;
    }
}

const showChoices = (yourChoice , compChoice) => {
    yourShow.innerHTML = "";
    yourShow.setAttribute("id" , yourChoice);
    compShow.innerHTML = "";
    compShow.setAttribute("id" , compChoice);
}


choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        let yourChoice = choice.getAttribute("id");
        let compChoice = getCompChoice();
        showChoices(yourChoice , compChoice);
        if(yourChoice === compChoice) {
            resultMsg.innerHTML = "Draw!";
            resultMsg.style.backgroundColor = "rgb(210, 210, 226)"
            resultMsg.style.color = "#0f172a"
        }
        else {
            let result = playgame(yourChoice , compChoice);
            showResult(result);
        }
    })
})