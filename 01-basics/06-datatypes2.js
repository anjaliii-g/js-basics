//Dynamically types language = need not to define the data type

//primitive data types

//7 types = are call by value. chnage happen in copy of string
//string, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol("123")
const id1 = Symbol("123")  //id == id1 => false
//id and id1 are not same. this is basically the purpose of symbol
//typeof bigint is undefined


//Reference data types (Non primitive)
//Arrays, Objects, Functions


const heros = ["qsaktiman", "naagraj", "doga"];
let myobj = {
    name:"yourname",
    age:22
} //datatype in object can be array, obj, function, number, string, boolean...

const myFun = function(){
    console.log("hello");
}



//typeofs 
//undefined == undefined
//null == object
//number == number
//string == string
//bigint == undefined
//boolean == boolean
//function ==  function object
//arrays == object
//object == object
