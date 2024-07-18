const user ={
    name:"anjali",
    price:999,
    welcometext: function(){
        console.log(`welcome ${this.name}`);    //interpolation. we can only use 'this' with objs
        console.log(this);
    }
}

console.log(user.welcometext());
user.name = "sam"
console.log(user.welcometext());
console.log(this);  //this will result in empty array {} 
//rn this is running in the node env so gives globally 
//when we run this in inspect it will return windows object

function chai(){
    console.log(this);  //here it will return so many things
}
chai()


function chai(){
    let user = "manu"
    console.log(this.user);  //here not accessible = undefined
}
chai()

// const chai = function(){
//     let user = "manu"
//     console.log(this.user);  //also not here
// }

// const chai = ()=>{
//     let user = "manu"
//     console.log(this.user); //also not here
// }
//we can only use this with objs. its not about normal func or arrow func

//()=>{} arrow func

const addthree = (num1,num2,num3)=>{
      return num1+num2+num3
}
//or can be return as const addthree = (num1,num2,num3)=>  (num1+num2+num3)

console.log(addthree(3,9,7));

