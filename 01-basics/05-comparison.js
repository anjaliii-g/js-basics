//normal comparisons = 2>1, 2>=1

console.log("2">1);  //true//js converted "2"into number
console.log("02">1);  //true//js converted "2"into number

//js allows us to compare variables of different datatypes

console.log(null >0);  //false //null is converted into 0 
console.log(null == 0);  //false //avoid these kind of conversions
console.log(null >=0);   //true

console.log(undefined >0);  //false 
console.log(undefined == 0);  //false
console.log(undefined >=0);   //false

//strict check === it also check the data type

console.log(2==="2");   //false