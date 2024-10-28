const wordList = ["BALL", "TABLE", "TOOTHPASTE", "GARDEN", "ORANGE", "PANCAKE", "MILKSHAKE", "WINDOW", "FRUIT", "YOYO", "QUARTER", "UMBRELLA"];

let word = wordList[Math.floor(Math.random()*wordList.length)];

let answerSection = document.querySelector(".answer-section");
let hang = document.querySelector(".hang");

for (let i = 0; i < word.length; i++) {
    let span = document.createElement("span");
    span.innerText = "-";
    answerSection.append(span);
}

let letters = document.querySelectorAll(".letter");

let trials = 0;

letters.forEach(letter => {
    letter.addEventListener("click", () => {
        let index = word.indexOf(letter.innerText);
        if (index > -1) {
            let indecies = getIndecies(word, letter.innerText);
            indecies.forEach(i => {
                answerSection.children.item(i).innerText = letter.innerText;
            });
            if (checkWin()) {
                alert("Well Done");
            }
        } else {
            trials++;
            let img = getAsset(trials);
            hang.append(img);
            letter.classList = "letter pressed";
            if (trials == 6) {
                alert('You Lost. The word was '+ word);
                return;
            }
        }
    });
});

function checkWin() {
    for (let i = 0; i < word.length; i++) {
        if (answerSection.children.item(i).innerText === "-") {
            return false;
        }
    }
    return true;
}

function getIndecies(word, letter) {
    let indecies = new Array();
    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) == letter) {
            indecies.push(i);
        }
    }
    return indecies;
}

function getAsset(trials) {
    let img = document.createElement("img");
    switch (trials) {
        case 1:
            img.className = "head";
            img.src = "./assets/head.svg"
            break;
        case 2:
            img.className = "body";
            img.src = "./assets/body.svg"
            break;
        case 3:
            img.className = "left-hand";
            img.src = "./assets/left-hand.svg"
            break;
        case 4:
            img.className = "right-hand";
            img.src = "./assets/right-hand.svg"
            break;
        case 5:
            img.className = "left-leg";
            img.src = "./assets/left-leg.svg"
            break;
        case 6:
            img.className = "right-leg";
            img.src = "./assets/right-leg.svg"
            break;
    }
    return img;
}