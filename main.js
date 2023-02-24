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
rollBtn.addEventListener("mousedown", rollTheDices);
function rollTheDices(e){
    let n = 6;
    const interval = setInterval(() => {
        dice1.style.rotate = `${n}deg`;
        dice2.style.rotate = `${n}deg`;
        n += 6;
    }, 6);
    setTimeout(() => clearInterval(interval), 4320); 
}
//720