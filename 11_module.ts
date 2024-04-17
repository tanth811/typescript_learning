// Import & Export
// 1) Variable (let,const) 
// 2) Function


// function
function test1(a: number, b:number){
    return a+b;
}

// anonymous function
const sub = function(a:number,b:number){}
// const z = 5 
// const a = test1 

// arrow function
const test3 = ()=>{}


// import { x,added,subs,multi,div } from "./11_moduleStore"
// console.log(x);

// console.log(added(10,12));
// console.log(subs(10,12));
// console.log(multi(10,12));
// console.log(div(2,12));


// 1. Promise (.then , await)
// 2. await do smth()
// 3. await must be call inside async function

// import { fetchData, fetchJson,fetchJsonAxios } from "./modules/jsonOrder"

// const main =  async ()=>{
//     const result = await fetchJson();
//     console.log("result : ",result);
//     const result2 = await fetchJsonAxios();
//     console.log("result 2 :", result2);
// }

// main();


import callbackFn from "./modules/callBack";
callbackFn((msg) => {
    console.log("Test");
})

// console.log(fetchData());