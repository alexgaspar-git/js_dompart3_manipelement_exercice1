//1 

let exo1 = document.querySelector('h2');

//2

exo1.textContent = "Exercice 1";
console.log(exo1);

//3

console.log(exo1.nextElementSibling.textContent = "exo1.textContent = 'Exercice 1'");

//4

console.log(document.querySelector('section').id);

//5

console.log(document.querySelector('h1').className);
console.log(document.querySelector('h1').classList);

//6

let h1 = document.querySelectorAll('h1');

h1.forEach(el => {
    console.log(el.className);
});

//7

console.log(document.querySelector('input').getAttributeNames());

//8

console.log(document.querySelector('input').getAttribute('type'));

//9

let exo9 = document.querySelector('#inputPassword3');
exo9.setAttribute("type", "password");
console.log(exo9);

//10

exo9.setAttribute("type", "color");
console.log(exo9);