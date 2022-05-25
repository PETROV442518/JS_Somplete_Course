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


/* functions usage*/
print();
splitConutryPopulation();
increasePopulationWithOne();