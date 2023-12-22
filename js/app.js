const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;

const overlay = document.getElementById('overlay');
const startButton = document.querySelector('.btn_reset');

overlay.addEventListener( 'click', (e) => {
    if ( e.target.tagName === 'A' ) {
        overlay.style.display = 'none';
    }
});

const phrases = [
    'these pretzels are making me thirsty',
    'not that theres anything wrong with that',
    'no soup for you',
    'serenity now',
    'george is getting upset'
];

function getRandomPhraseAsArray(arr) {
    const randomElement = arr[Math.floor(Math.random() * arr.length)];
    const characters = randomElement.split("");
    return characters;
}

function addPhraseToDisplay(arr) {
    for ( let i = 0; i < arr.length; i++ ) {
        const li = document.createElement('li');
        li.textContent = arr[i];
        const ul = document.querySelector('ul');
        ul.append(li);
        if ( arr[i] === 'a' || arr[i] === 'b' || arr[i] === 'c' || arr[i] === 'd' || arr[i] === 'e' || arr[i] === 'f' || arr[i] === 'g' || arr[i] === 'h' || arr[i] === 'i' || arr[i] === 'j' || arr[i] === 'k' || arr[i] === 'l' || arr[i] === 'm' || arr[i] === 'n' || arr[i] === 'o' || arr[i] === 'p' || arr[i] === 'q' || arr[i] === 'r' || arr[i] === 's' || arr[i] === 't' || arr[i] === 'u' || arr[i] === 'v' || arr[i] === 'w' || arr[i] === 'x' || arr[i] === 'y' || arr[i] === 'z' ) {
            li.className = 'letter';
        } else {
            li.className = 'space';
        }
    }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);


// Steps 7 & 8 Commented Out Below (before adding 9 & 10)
/*
function checkLetter(button) {
    const letterClass = document.getElementsByClassName('letter');
    let letterMatch = null;
    for ( let i = 0; i < letterClass.length; i++ ) {
        console.log('letterClass[i].textContent', letterClass[i].textContent);
        if ( button.textContent === letterClass[i].textContent ) {
            console.log('true');
            letterMatch = 'true';
            if (letterMatch === 'true') {
                letterClass[i].classList.add('show');
            }
        } else {
            console.log('false');
            letterMatch;
        }
    }
    return letterMatch;  
}

qwerty.addEventListener( 'click', (e) => {
    if ( e.target.tagName === 'BUTTON' ) {
        e.target.className = 'chosen';
        e.target.disabled = 'true';
        const letterFound = checkLetter(e.target);
        console.log('letterFound', letterFound);
        if (letterFound !== 'true') {
            missed += 1;
        }
    } 
});
*/




function checkLetter(button) {
    const letterClass = document.getElementsByClassName('letter');
    let letterMatch = null;
    for ( let i = 0; i < letterClass.length; i++ ) {
        console.log('letterClass[i].textContent', letterClass[i].textContent);
        if ( button.textContent === letterClass[i].textContent ) {
            console.log('true');
            letterMatch = 'true';
            if (letterMatch === 'true') {
                letterClass[i].classList.add('show');
            }
        } else {
            console.log('false');
            letterMatch;
        }
    }
    return letterMatch;  
}

qwerty.addEventListener( 'click', (e) => {
    if ( e.target.tagName === 'BUTTON' ) {
        e.target.className = 'chosen';
        e.target.disabled = 'true';
        const letterFound = checkLetter(e.target);
        console.log('letterFound', letterFound);
        if (letterFound !== 'true') {
            missed += 1;
        }
        const hearts = document.querySelectorAll('ol li img');
        const heartOne = hearts[0]; 
        const heartTwo = hearts[1];
        const heartThree = hearts[2];
        const heartFour = hearts[3];
        const heartFive = hearts[4];
        if ( missed === 1 ) {
            heartOne.src = "images/lostHeart.png";
        } else if ( missed === 2) {
            heartTwo.src = "images/lostHeart.png";
        } else if ( missed === 3 ) {
            heartThree.src = "images/lostHeart.png";
        } else if ( missed === 4 ) {
            heartFour.src = "images/lostHeart.png";
        } else if ( missed === 5 ) {
            heartFive.src = "images/lostHeart.png";
        }
    }
});




































