function myname(){
    console.log("anjali");
}
//myname   == reference, tells that func exists 
myname()     //call the func

function add(num1, num2){  //here we dont need to give the type of parameters nor the return type
   //console.log(num1+num2);
    return num1+num2;         //here we call them parameters
}
console.log(add(2,3));     // here add(2,3) they are arguments

function login(name){   //we can give default values like login(name = "sam"). no value is given then this is used
    if(!name){
        console.log("please enter the user");
        return
    }
    return `${name} logged in`
}
console.log(login("anu")); 