if(true){
    let a=10 //have local scope
    const b=20 //local scope
    var c=30  //no local scope
}
// console.log(a);
// console.log(b);
// console.log(c); //c is accessed from here also. thats why should not use

//global values are available in scope but scope arent outside the scope

//func and expression

function addone(num){  //we can call it before its defination
    return num+1
}
addone(5)

const addtwo = function(num){  //expressions, work as variable. here we need func defination first then call
    return num+2
}
addtwo(5)