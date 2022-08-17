//getElementsByTagName.
const liCollection = document.getElementsByTagName('li');
console.log(liCollection);
for (const li of liCollection) {
    console.log(li.innerText)
}


//getElementById.
let dom2 = document.getElementById("Dom2");
dom2.classList.add("sami");
dom2.classList.add("rahat");
dom2.classList.remove("rahat");

console.log(dom2.innerText)

//getElementsByClassName.
const MyName = document.getElementsByClassName('me');
for (const names of MyName) {
    console.log(names.innerText = 'ASR');
}

//QuerySelectorAll::
const QueryAll = document.querySelectorAll('#Dom2 li')
for (Query of QueryAll) {
    console.log(Query)
}

//querySelector:: Only Display first-Child

const JustQuery = document.querySelector('#Dom2 li');
console.log(JustQuery)

//getAttribute ,  classList.add ,   classList.remov , setAttribute::
let doms2 = document.getElementById("Dom2");
//add
dom2.classList.add("sami");
dom2.classList.add("rahat");
//remove
dom2.classList.remove("rahat");
dom2.classList.remove("rahat");
dom2.setAttribute('title', 'Abdus sami rahat');
console.log(doms2.innerText);

//creatElement::
const creat = document.createElement('div');

creat.innerText = 'Abdus Sami Rahat';
console.log(creat)