//Function Examples
function areaTriangle(side:number, height:number){
    let area = 0.5*side*height;
    console.log(`area = ${area}`);
}

areaTriangle(8,5)//hoist

//Anonymous Function or Traditional Function
const areaTriangle2 = function (side:number, height:number){
    let area = 0.5*side*height;
    console.log(`area = ${area}`);
}

areaTriangle2(10,2)

//Arrow Function
const areaTriangle3 = (side:number, height:number) => {
    let area = 0.5*side*height;
    console.log(`area = ${area}`);
}

areaTriangle3(10,2)


const foo = {
    name: "Tanthai",
    area: areaTriangle3,
}
foo.area(3,4);

const products =[
    {id: 1, name: "Food", price: 16},
    {id: 25, name: "Food", price: 16},
    {id: 31, name: "Food", price: 15},
    {id: 41, name: "Food", price: 14},
    {id: 59, name: "Food", price: 12},
]

for(let key in products)
    console.log(products[key]);

products.map((item) => console.log(item))

products.push({id: 5, name:"Drink", price: 53})
products.map((item) => console.log(item))

//adding item with spread operator
const newProduct = [...products,{id: 6, name: "Food", price: 19}]
newProduct.map((item)=> console.log(item))


const newProduct2 = products.filter( (item)=>(item.id !== 59 ) )
newProduct2.map((item)=> console.log(item))