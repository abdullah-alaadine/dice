const diceOneFirstSide  = [document.querySelector(".circles1:nth-child(5)")];
const diceOneSecondSide = [document.querySelector(".circles1:nth-child(4)"), document.querySelector(".circles1:nth-child(6)")];
const diceOneThirdSide  = [document.querySelector(".circles1:nth-child(3)"), document.querySelector(".circles1:nth-child(5)"), document.querySelector(".circles1:nth-child(7)")];
const diceOneFourthSide = [document.querySelectorAll(".circles1:nth-child(2n)")];
const diceOneFifthSide  = [document.querySelectorAll(".circles1:nth-child(2n + 1)")];
const diceOneSixthSide  = [...diceOneSecondSide, ...document.querySelectorAll(".last-side")];
const diceTwoFirstSide  = [document.querySelector(".circles2:nth-child(5)")];
const diceTwoSecondSide = [document.querySelector(".circles2:nth-child(4)"), document.querySelector(".circles2:nth-child(6)")];
const diceTwoThirdSide  = [document.querySelector(".circles2:nth-child(3)"), document.querySelector(".circles2:nth-child(5)"), document.querySelector(".circles2:nth-child(7)")];
const diceTwoFourthSide = [document.querySelectorAll(".circles2:nth-child(2n)")];
const diceTwoFifthSide  = [document.querySelectorAll(".circles2:nth-child(2n + 1)")];
const diceTwoSixthSide  = [...diceOneSecondSide, ...document.querySelectorAll(".last-side")];
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const rollBtn = document.getElementById("roll");
const circles = document.getElementsByClassName("circles");
const rollingSound = document.createElement("audio");
rollingSound.src = "./sounds/dice-sound-effect_HoCT2XxU.mp3";
rollBtn.addEventListener("mousedown", rollTheDices);
function rollTheDices(e){
    rollBtn.removeEventListener("mousedown", rollTheDices);
    rollingSound.pause();
    rollingSound.play();
    let x = 8;
    const interval = setInterval(() => {
        dice1.style.transform = `translateX(${x}px)`;
        dice2.style.transform = `translateX(${x}px)`;
        x *= -1;
    }, 100);
    setTimeout(() => {
        clearInterval(interval);
        rotateTheDices();
    }, 2000)
}
function rotateTheDices(){
    let n = 6;
    const interval = setInterval(() => {
        n == 1440 ? clearInterval(interval): null;
        dice1.style.rotate = `${n}deg`;
        dice2.style.rotate = `${n}deg`;
        n += 6;
    }, 6);
    setTimeout(() => {
        rollBtn.addEventListener("mousedown", rollTheDices);
        selectSideAfterRolling();
    }, 1440);
}

function selectSideAfterRolling(){
    Array.from(circles).forEach((elem) => elem.style.visibility = "hidden");
    const diceOneSide = Math.floor(Math.random() * 6) + 1;
    const diceTwoSide = Math.floor(Math.random() * 6) + 1;
    console.log(diceOneSide, diceTwoSide);
    checkSide(diceOneSide, diceTwoSide);
    checkWinner(diceOneSide, diceTwoSide);
}
function checkSide(n1, n2){
    switch(n1){
        case 1:
            diceOneFirstSide[0].style.visibility = "visible";
            break;
        case 2:
            diceOneSecondSide.forEach((elem) => elem.style.visibility = "visible");
            break;
        case 3:
            diceOneThirdSide.forEach((elem) => elem.style.visibility = "visible");
            break;
        case 4:
            diceOneFourthSide[0].style.visibility = "visible";
            break;
        case 5:
            diceOneFifthSide[0].style.visibility = "visible";
            break;
        case 6:
            diceOneSixthSide.forEach((elem) => elem.style.visibility = "visible");
    };
    switch(n2){
        case 1:
            diceTwoFirstSide[0].style.visibility = "visible";
            break;
        case 2:
            diceTwoSecondSide.forEach((elem) => elem.style.visibility = "visible");
            break;
        case 3:
            diceTwoThirdSide.forEach((elem) => elem.style.visibility = "visible");
            break;
        case 4:
            diceTwoFourthSide[0].style.visibility = "visible";
            break;
        case 5:
            diceTwoFifthSide[0].style.visibility = "visible";
            break;
        case 6:
            diceTwoSixthSide.forEach((elem) => elem.style.visibility = "visible");
    }
}
