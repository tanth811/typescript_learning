import readlineSync from 'readline-sync'
// var, let , const
let หัวกระดอ = 1 
console.log(หัวกระดอ)

let y: number
y = 5
console.log(y)

//cannot give the varible to z afterward
const z = 10
console.log(z)

const message1 = `Hello World`
const message2 = `Isus`
console.log(message1 + message2)

const isFat = true
console.log(isFat)

const weight1 = 50 
const weight2 = 60

console.log(`Sum of Weight: `, (weight1+weight2));
console.log(`Sum of Weight: `+ (weight1+weight2));
console.log(`Diff of Weight: `, (weight1-weight2));
console.log(`Diff of Weight: `+ (weight1-weight2));



//Question 1
const height = Number(readlineSync.question("Input height: "));
const weight = Number(readlineSync.question("Input weight: "));
const bmi = weight/(height*height)
console.log(`BMI: ${bmi} Height: ${height} Weight: ${weight}`);

if(bmi > 25 ){
    console.log("You are Overweight.");
}else if ( bmi >= 17 && bmi <25){
    console.log("You are Average.");
}else{
    console.log("You are Thin");
}

//Qustion 2
const celcius = 50;
const fahrenheit = (celcius*(9/5))+32;
console.log(`Farenheit: ${fahrenheit} From Celcius ${celcius}`);