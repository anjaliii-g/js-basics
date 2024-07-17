//arrays
//resizeable
//mix datatypes
//can access elements by index
//while copying make shallow copy - copy share the same reference - 
//if we make change it will reflect everywhere

const num = [1,2,3,"4", false,"e" ]
console.log(num);
const arr = new Array(1,2,3,"a","b","c")
console.log(arr);
arr.push(6)
console.log(arr);
num.pop()//remove last value
num.unshift(10)//push at first place
num.shift()//pop at first place
console.log(num.includes(9));

console.log(num);

const arr2 = arr.join()  //string bn jata h
console.log(arr);
console.log(typeof arr2); //string

//slice == just print the sliced piece of array. 
console.log("a",arr);
const arr3 = arr.slice(1,3);
console.log(arr3);
console.log("b",arr);

//splice == chnage the original array. [], both ends included. 
//cut off piece of array from original array
console.log("a",arr);
const arr4 = arr.splice(1,3);
console.log(arr4);
console.log("b",arr);




