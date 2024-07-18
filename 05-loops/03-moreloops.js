//for of loop

//array specific loops
//["", "", ""]
//[{}, {}, {}]

const arr = [1,2,3,4,5]
for (const num of arr) {
  console.log(num);
}

const greeting = "hello javascript"
for (const greet of greeting) {
    //console.log(`each char ${greet}`);
}

//maps
//map is an object that hold key value pair, keys are ordered in insertion order
//all unique values

const map = new Map()
map.set('in',"india")
map.set("us","ustates")
map.set("fr","france")
//console.log(map);

// for (const [key, value] of map) {
//   console.log(key, value);
  
// }

const myobj ={
  "game1":"nfs",
  "game2":"spd"
}
// for (const [key, value] of myobj) { //obj cannt be iteratable by for of
//   console.log(key, value);
  
// }

