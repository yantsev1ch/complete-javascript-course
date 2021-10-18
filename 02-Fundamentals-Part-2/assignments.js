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



