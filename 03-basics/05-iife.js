//Immediately invoked func expression

//used to immediately invoke the fun and to prevent the fun from global pollution

//normal func
function chai(){
    console.log("chai");
}
chai()

//iife

// (function chaii(){   //named iife
//     console.log("chaii");
// })();   //here ; is imp to terminate the fun. it is invoked but we need to tell it where to stop

//()() == first will contain executation, second is for call

( (name)=>{ //unnamed iife
    console.log(`chaii ${name}`);
})('manu');