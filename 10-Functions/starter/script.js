'use strict';
//coding challenge 1
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const result = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}(Write option number)`
      )
    );
    if (typeof result === 'number' && result < this.answers.length) {
      this.answers[result]++;
    }
    this.displayResults();
    this.displayResults('string');
  },
  displayResults: function (type = 'array') {
    type === 'array'
      ? console.log(this.answers)
      : console.log(`Poll resuts are ${this.answers}`);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//coding challenge 2 - closure
document.querySelector('h1').addEventListener(
  'click',
  (function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
  })()
);

let input = ['5', '10', '10', '1'];

let nuzhenNaylon = Number(input[0]);
let nuznaBoya = Number(input[1]);
let nuzenRazreditel = Number(input[2]);
let chasoveRabota = Number(input[3]);

const cenaNaylonZaKvMetar = 1.5;
const cenaBoqZaLitar = 14.5;
const cenaRazreditelNaLitar = 5;

let cenaNaylon = nuzhenNaylon * cenaNaylonZaKvMetar + 2 * cenaNaylonZaKvMetar;
let cenaBoya = nuznaBoya * cenaBoqZaLitar * 1.1;
let cenaRazreditel = nuzenRazreditel * cenaRazreditelNaLitar;

let cenaMateriali = cenaNaylon + cenaBoya + cenaRazreditel + 0.4;
let cenaMaistori = chasoveRabota * (0.3 * cenaMateriali);

console.log(cenaMaistori + cenaMateriali);

let input2 = ['2', '4', '3'];

let broiPileshkiMenuta = Number(input2[0]);
let broiRibniMenuta = Number(input2[1]);
let broiVegetarianskiMenuta = Number(input2[2]);

const pileshkoMenu = 10.35;
const menuSRiba = 12.4;
const vegetarianskoMenu = 8.15;

let sumaPileski = pileshkoMenu * broiPileshkiMenuta;
let sumaRibni = broiRibniMenuta * menuSRiba;
let sumaVegetarianski = vegetarianskoMenu * broiVegetarianskiMenuta;
let sumaMenuta = sumaPileski + sumaRibni + sumaVegetarianski;

let sumaDesert = sumaMenuta * 0.2;

let krainaSuma = sumaDesert + sumaMenuta + 2.5;

console.log(krainaSuma);
