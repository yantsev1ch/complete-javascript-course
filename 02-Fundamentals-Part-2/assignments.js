/*
const country = 'Belarus';
const continent = 'Europe';
let population = 10;
console.log(country, continent, population);


const isIsland = false;
let language;
console.log(isIsland, population, country, language);


language = 'Russian';


let newPopulation = population + 1;
console.log(newPopulation);
let description = 'Portugal is in Europe, and its 11 million people speak portuguese';


description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);


if (population > 33) {
    console.log("Portugal's population is above average");
} else {
    console.log("Portugal's population is 22 million below average");
}


// // let numNeighbours = prompt('How many neighbour countries does your country have?');
// const numNeighbours = Number(prompt('How many neighbour countries does your country have ? '),);
// if (numNeighbours === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }



if (language === 'English' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`)
} else {
    console.log(`${country} does not meet your criteria :(`)
}


switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
        break;
}


console.log(
    `${country} population is ${population > 33 ? 'above' : 'below'} average.`
)



*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const describeCountry = (country, population, capitalCity) => {
    return `${country} has ${population} million people and it's capital city is ${capitalCity}.`
}

const descBelarus = describeCountry('Belarus', 10, 'Minsk');
const descRussia = describeCountry('Russia', 144, 'Moscow');
const descUkraine = describeCountry('Ukraine', 44, 'Kiev');
console.log(descBelarus, descRussia, descUkraine);


function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const percBelarus = percentageOfWorld1(10);
const percRussia = percentageOfWorld1(144);
const percUkraine = percentageOfWorld1(44);
console.log(percBelarus, percRussia, percUkraine);


const percentageOfWorld3 = (population) => (population / 7900) * 100;


const describePopulation = (country, population) => {
    const percPopulation = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percPopulation}% of the world.`
}
console.log(describePopulation('Belarus', 10));
console.log(describePopulation('Russia', 144));
console.log(describePopulation('Ukraine', 44));


const population = [10, 144, 44, 20];
console.log(population.length === 4)
const percentages = [
    percentageOfWorld1(population[0]),
    percentageOfWorld1(population[1]),
    percentageOfWorld1(population[2]),
    percentageOfWorld1(population[3])
];
console.log(percentages);


const neighbours = ['Russia', 'Ukraine', 'Poland', 'Lithuania'];
neighbours.push('Utopia');
neighbours.pop();
console.log(neighbours.includes('Germany') ? '' : 'Probably not a central European country :D');
neighbours[neighbours.indexOf('Russia')] = 'Russian Federation';
console.log(neighbours);


const myCountry = {
    country: 'Belarus',
    capital: 'Minsk',
    language: 'Russian',
    population: 10,
    neighbours: ['Russia', 'Ukraine', 'Poland', 'Lithuania'],
    describe: function () {
        console.log(
            `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and capital called ${this.capital}.`
        )
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0;
    }
}

myCountry.describe();
myCountry.checkIsland();

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and capital called ${myCountry.capital}.`);
myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);



for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`);
}