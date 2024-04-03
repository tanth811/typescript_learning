const person = {
    name: "Tanthai",
    surname: "Wonwichienkul",
    age: 41,
}

type PersonType = {
    name: string;
    surname: string;
    age: number;
}

let person2: PersonType;

person2 = {
    name: "Atsjan",
    surname: "Homprwong",
    age: 12,
}

console.log(person);
console.log(person.name)
console.log(person.surname);
console.log(person.age);

person.name = 'John'

// person2 = person // valid

// person = person2 #cannot assign due to const

console.log(person.name);

//assign object in to an array

const persons = [ person, person2]

for(let i=0; i<persons.length; i++){
    console.log(persons[i].name,persons[i].surname,persons[i].age);
}


// for(let i=0;i<persons.length;i++){
//     for( const[key, value] of Object.entries(persons)){
//         console.log(key, value);
//     }
// }

//for in
for(let item in persons){
    console.log(item, persons[item]);
}

type t = "de" | "dbiz" | "comp";

type StudentType = Record< t,
{
    name: string;
    age?: number
}>

const students: StudentType = {
    de:{name:"John",age:20},
    dbiz:{name:"Jack",age:21},
    comp:{name:"Jim",age:22}
}

console.log(students);
console.log(students.comp.age);

students.comp.age = 19;
console.log(students.comp.age);

students.comp = {
    name: "Ja Morant",
    // age: 20
}

console.log(students.comp.age);