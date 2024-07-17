const mHero = ["thor", "ironman","spiderman"]
const dc = ["superman","flash"]


//mHero.push(dc)   //push dc as an element
const allhero = mHero.concat(dc)
console.log(allhero);

const allnew = [...mHero, ...dc]//through this we can combine more array
console.log(allnew);

const anotherarr = [1,2,[3,4,5],[6,[7,8],9]]
const real = anotherarr.flat(Infinity) //(),put level 1/2/3
// or infinity if dont know level
//put all ele in a single array
console.log(real); //

console.log(Array.isArray("anjali")); //false
console.log(Array.from("anjali")); //from convert it into array of single ele like [ 'a', 'n', 'j', 'a', 'l', 'i' ]
console.log(Array.from({name:"anjali"})); //not converted, returns empty array

let score1 =100
let score2 =200
let score3 =300
console.log(Array.of(score1, score2, score3));



