'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//codding challenge 1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

const [gk, ...fieldPlayers] = players1;
console.log(`GK: ${gk}, Field players: ${fieldPlayers}`);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...playerNames) {
  console.log(playerNames);
  console.log(`${playerNames.length} goals scorred!`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

//codding challenge 2

const printGoalsV2 = function (...playerNames) {
  for (let i = 0; i < playerNames.length; i++) {
    console.log(`Goal ${i + 1}: ${playerNames[i]}`);
  }
};
printGoalsV2(...game.scored);

const avgOdds = function () {
  const odds = Object.values(game.odds);
  let avg = 0;
  for (const i of odds) {
    avg += i;
  }
  avg /= odds.length;
  console.log(avg.toFixed(2));
};

avgOdds(Object.values(game.odds));

const printOddsPerTeam = function () {
  for (const [team, odd] of Object.entries(game.odds)) {
    const teamName = team === 'x' ? 'draw' : `Victory for ${game[team]}`;
    console.log(`Odd of ${teamName}: ${odd}`);
  }
};
printOddsPerTeam();

const scorers = {};
game.scored.forEach(name => {
  scorers[name] ? scorers[name]++ : (scorers[name] = 1);
});
console.log(scorers);

//codding challenge 3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

console.log(`An event happened, on 
average, every ${90 / gameEvents.size} minutes`);

[...gameEvents.keys()].forEach(e => {
  if (e <= 45) {
    console.log(`[FIRST HALF] ${e}: ${gameEvents.get(e)}`);
  } else {
    console.log(`[SECOND HALF] ${e}: ${gameEvents.get(e)}`);
  }
});
