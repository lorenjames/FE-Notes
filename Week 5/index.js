let number = 28;

if (number % 3 == 0 && number % 7 == 0) {
    console.log("The number is divisible by both 3 and 7.");
} else if (number % 3 == 0) {
    console.log("The number is divisible by 3.");
} else if (number % 7 == 0) {
    console.log("The number is divisible by 7.");
} else {
    console.log("The number is not divisible by 3 or 7.");
}

var num1 = 37;

if (num1) {
    console.log("Parakeet");
} else {
    console.log("Parrot");
}

let temperature = 77;
let weatherCondition = "cloudy";

if (temperature > 86) {
    console.log("It's too hot outside!");
} else {
    if (weatherCondition === "sunny") {
        console.log("It's a nice day outside!");
    } else if (weatherCondition === "cloudy") {
        console.log("It's a bit gloomy outside.");
    } else {
        console.log("I'm not sure what the weather is like.");
    }
}

var fruit = "Apples";
var answer;

switch (fruit) {
    case "Apples":
        console.log("Apples are $0.65 a pound.");
        break;
    case "Grapes":
        console.log("Bananas are $2.75 a pound.");
        break;
    case "Oranges":
    case "Grapefruits":
        console.log("Oranges and Grapefruits are $.80 a pound.");
        break;
    default:
        console.log("Sorry, we are out of that fruit.");
}

console.log("Is there anything else you would like?");

let age = 21;
let status;

switch (true) {
    case (age < 18):
        status = "a minor";
        break;
    case (age >= 18 && age <= 65):
        status = "an adult";
        break;
    default:
        status = "a senior";
}

console.log("You are " + status);

// var a = 5;
// var b = 2;
// var c = 'blue';

// console.log(a == 5);
// console.log(b === '2');
// console.log(c == 'Blue');

// let x = 45;
// let y = 65;
// let z = 75;
// console.log(x + y > z);

var a = 2;
var b = 15;
var c = 9;
console.log(a >= b || a <= c && a + c > b);

var x = true;
var y = false;

console.log(x && !y);

var bornAfter = 1980;
var bornBefore = 1997;
var birthYear = 1992;

if (bornBefore > birthYear && bornAfter < birthYear) {
    console.log("You are a Millenial!");
}

var requiredCupsOfRice = 5;
var currentCupsOfRice = 0;


while (currentCupsOfRice != requiredCupsOfRice) {
    console.log('The bowl contains ' + (++currentCupsOfRice) + ' cups of rice.');
}
console.log('We have enough rice!');

let points = 0;
let pointsReset = false;

for (let turns = 0; (turns <= 100 && points <= 290); turns++) {
    if (points != 125 || pointsReset === true) {

        if (turns % 2 === 0) {
            points += 5
        } else if (turns % 1 === 0) {
            points += 3
        }
    } else { pointsReset = true; points = 25; }
    console.log('Turns: ' + turns + ' Score: ' + points)
}