// Declare variables 
const Country = 'Bulgaria';
const Continent = 'Europe';
let population = 6;
const IsIsland = false;
const Language = "Bulgarian"
var description = 'Portugal is in Europe, and its 11 million people speak portuguese';


function print() {
    return console.log(Country, Continent, population, IsIsland, Language);
};

function splitConutryPopulation() {
    console.log(population / 2 + ' mln population');
};
function increasePopulationWithOne() {
    console.log(population + 1);
};


// functions usage
print();
splitConutryPopulation();
increasePopulationWithOne();

//Coding Challenge #1
let MarksWeight = 78;
let MarksHeight = 1.69
let JohnsWeight = 92;
let JohnsHeight = 1.95

function calculateBMI(height, mass) {
    return BMI = mass / height ** 2
}

let markHigherBMI = false;
if (calculateBMI(MarksHeight, MarksWeight) > calculateBMI(JohnsHeight, JohnsWeight)) {
    markHigherBMI = true;
}
console.log(markHigherBMI)