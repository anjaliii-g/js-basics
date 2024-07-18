//func when we dont know no. of parameters

function cart(...num1){  //rest operator. it returns an array of all dynamic ele being passed to it
    return num1;

}
console.log(cart(200, 100, 600, 500))

//func with objs
// const user ={
//     name:"anjali",
//     age:26,
// }

function candi(newuser){
    console.log(newuser.name);//in objs we need to specify which ele of obj
}
candi( user ={
    name:"anjali",
    age:26,
})

//passsing array in func

const myarray = [1,23,4,5,6,7,8]

function printarrayele(arr){
    return arr[3]
}

console.log(printarrayele(myarray));