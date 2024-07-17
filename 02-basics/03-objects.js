//objects can be declared as literals or constructor
//singleton made by constructor
//literals s singleton nhi bnega

//through constructor
//Object.create

//object literals

const mysym = Symbol("key1") 

const jsuser = {
    name:"manu",
    [mysym]:"mykey1",//symbol should be used in square brackets
    age:18,
    location:"jaipur",
    email:"abc@gmail.com",
    islog:false
}

console.log(jsuser.name);  //one way
console.log(jsuser["email"]);  //another way
console.log( jsuser[mysym]);


//change value of obj
jsuser.email = "this@email"
//Object.freeze(jsuser)  //freez the content. we cant chnage
//console.log(jsuser);


jsuser.greet =function(){     //here we have added a func in our obj
    console.log("hello");
}
console.log(jsuser.greet); //[Function (anonymous)]//func return back, reference
console.log(jsuser.greet()); //hello

jsuser.height = "158cm"     //variable is added
console.log(jsuser);

jsuser.greet2 =function(){     //here we have added a func in our obj
    console.log(`my name is ${this.name}`);  // when we have to reference the same obj in which we are adding the func 
}
console.log(jsuser.greet2());