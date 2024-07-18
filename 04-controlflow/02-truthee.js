const email = "anjali@google"

if(email){
    console.log("got mail");
} else{
    console.log("not");
}

//falsy
//false, 0, -0, BigInt, "", null, undefined, NaN, 0n

//truthy
//"0", 'false', " ", [], {}, function(){},

//check array
if(email.length ===0){
    console.log("emptyarr");
}

const emptyobj = {}
if(Object.keys(emptyobj).length === 0){
    console.log("empty");
}

//nullish coalescing operator
//this checks for null and undefined. if we have values other than these
//then that value will be assigned
let val1;
val1 =5??10            //5
//val1 = null??10      //10
//val1 = undefined??15 //15
//val1 = null??10??20  //10
console.log(val1);


//terniary ope
//condition?true:false
const cost =90
cost>=80?console.log("yes"):console.log("no");
