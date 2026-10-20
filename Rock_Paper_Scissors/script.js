let choice = document.querySelectorAll("a");
let finalResult = document.getElementById("showingresult");
let personScore = document.getElementById("score_of_person");
let computerScore = document.getElementById("score_of_computer");
let computerAnswer = document.getElementById("selected_by_computer");
let personAnswer = document.getElementById("selected_by_person");
let clear = document.getElementsByClassName("clear")[0];
let restart = document.getElementsByClassName("restart")[0];

let objects = ["rock", "paper", "scissors"];
let randomObject;
let value;
let computerNumberScore = 0;
let personNumberScore = 0;
for (let i = 0; i < choice.length; i++) {
    choice[i].addEventListener("click", () => {
        value = choice[i].dataset.value;
        personAnswer.innerHTML = value;
        run();
    })
}

function run() {
    restart.style.visibility = "visible";
    let randomNumber = Math.floor(Math.random() * objects.length);
    randomObject = objects[randomNumber];
    computerAnswer.innerHTML = randomObject;
    finalResult.style.color = "white";
    computerAnswer.style.color = "white";
    personAnswer.style.color = "white";
    if (
        (randomObject == "rock" && value == "scissors") ||
        (randomObject == "scissors" && value == "paper") ||
        (randomObject == "paper" && value == "rock")
    ) {
        computerNumberScore++;
        finalResult.innerHTML = "YOU LOSS!"
        computerScore.innerHTML = `It score: ${computerNumberScore}`;
        personScore.innerHTML = `Your score: ${personNumberScore}`;
    }
    else if (
        (value == "rock" && randomObject == "scissors") ||
        (value == "scissors" && randomObject == "paper") ||
        (value == "paper" && randomObject == "rock")
    ) {
        personNumberScore++;
        finalResult.innerHTML = "YOU WIN!"
        computerScore.innerHTML = `It score: ${computerNumberScore}`;
        personScore.innerHTML = `Your score: ${personNumberScore}`;
    }
    else {
        finalResult.innerHTML = "Equal"

    }

}

clear.addEventListener("click", () => {
    finalResult.innerHTML = "Choice an item";
    computerAnswer.innerHTML = "Computer choice";
    personAnswer.innerHTML = "Your choice";
    finalResult.style.color = "#a0c7ab";
    computerAnswer.style.color = "#cacaca";
    personAnswer.style.color = "#cacaca";
})

restart.addEventListener("click", () => {
    computerNumberScore = 0
    personNumberScore = 0;
    finalResult.innerHTML = "Choice an item";
    computerAnswer.innerHTML = "Computer choice";
    personAnswer.innerHTML = "Cour choice";
    personScore.innerHTML = "Your score: 0";
    computerScore.innerHTML = "It score: 0";
    restart.style.visibility = "hidden";
    finalResult.style.color = "#a0c7ab";
    computerAnswer.style.color = "#cacaca";
    personAnswer.style.color = "#cacaca";

})



