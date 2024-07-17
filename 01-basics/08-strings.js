//"" '' both are fine

//interpolation = 
const name = "anjali"
console.log(`my name is ${name}`);

//another method to declare string
const anotherstring = new String('newstring')
console.log(anotherstring); //[String: 'newstring']
console.log(anotherstring[2]); //w
//here string will be treated as object

//apply so many functions on string like
console.log(anotherstring.length);
console.log(anotherstring.toUpperCase());

//here we are not modifying the string.
//just performing functions
//charAt, indexOf, substring, slice, trim, replace, split
console.log(anotherstring)
