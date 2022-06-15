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

//Coding Challenge 1 and 2
const MarksWeight = 78;
const MarksHeight = 1.69
const JohnsWeight = 92;
const JohnsHeight = 1.95;

function calculateBMI(height, mass) {
    return BMI = mass / height ** 2
}

let markHigherBMI = false;
let marksBMI = calculateBMI(MarksHeight, MarksWeight);
let johnsBMI = calculateBMI(JohnsHeight, JohnsWeight);
if (marksBMI > johnsBMI) {
    markHigherBMI = true;
}

if (markHigherBMI) {
    console.log(`Mark\'s BMI (${marksBMI.toFixed(2)}}) is higher than John\'s (${johnsBMI.toFixed(2)})!`);
}
else {
    console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})!`);
}

//Codding challenge 3
const firstTeamResults = [96, 108, 89];
const secondTeamResults = [88, 91, 110];

let avgFirstTeam = (firstTeamResults.reduce(function (accumVariable, curValue) {
    return accumVariable + curValue
}, 0)) / firstTeamResults.length;

let avgSecontTeam = (secondTeamResults.reduce(function (accumVariable, currValue) {
    return accumVariable + currValue
}, 0)) / secondTeamResults.length;
if (avgFirstTeam > avgSecontTeam && avgFirstTeam >= 100) {
    console.log(`Winner is the first team with avg score: ${avgFirstTeam.toFixed(2)}`);
} else if (avgFirstTeam < avgSecontTeam && avgSecontTeam >= 100) {
    console.log(`Winner is the second team with avg score: ${avgSecontTeam.toFixed(2)}`);
} else if (avgFirstTeam >= 100) {
    console.log(`Draw, both teams have ${avgFirstTeam.toFixed(2)} avg score`);
} else {
    console.log(`No team wins, both teams have ${avgFirstTeam.toFixed(2)} avg score, which is not enough`);
}

//Coding Challenge 4

const bills = [275, 40, 430]

bills.forEach(bill => {
    let isBetweenRange = (bill >= 50 || bill <= 300) ? true : false;
    let tip = isBetweenRange ? 0.15 * bill : 0.20 * bill;

    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)
});