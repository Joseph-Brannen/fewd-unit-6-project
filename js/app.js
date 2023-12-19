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