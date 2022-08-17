/* 
<!-- First Way of onclick -->
#<button onclick="document.body.style.backgroundColor='purple'">Click me for make the body Purple color!!!</button>

*/


// <!-- secound Way of onclick into HTML file-->
//<button onclick="makePink()">Click me for make the body Pink color!!!</button>
//most important
function makePink() {
    document.body.style.backgroundColor = 'pink';
};

//<!-- Third Way of onclick -->
const makeOrange = document.getElementById('make-orange');
makeOrange.onclick = makeOrangeClickable;

function makeOrangeClickable() {
    document.body.style.backgroundColor = 'orange';
}
//<!-- Third Way:another of onclick -->
const makeIndigo = document.getElementById('make-indigo');
makeIndigo.onclick = function() {
    document.body.style.backgroundColor = 'indigo';
};

//<!-- Four:1 of onclick -->
const makeGoldenrod = document.getElementById('make-goldenrod');
makeGoldenrod.addEventListener('click', makeGoldenrodBTN);

function makeGoldenrodBTN() {
    document.body.style.backgroundColor = 'goldenrod'
};

//
const makeGold = document.getElementById('make-golden');
makeGold.addEventListener('click', makeGoldBtn);

function makeGoldBtn() {
    document.body.style.backgroundColor = 'gold'
}
//<!-- Four:2 of onclick -->
const makeGreen = document.getElementById('make-green')
makeGreen.addEventListener('click', function makegreen() {
    document.body.style.backgroundColor = 'green'
})

//<!-- Four:Final of onclick --> 
//Most important
document.getElementById('make-yellow').addEventListener('click', function makeYelloew() {
    document.body.style.backgroundColor = 'yellow'
})