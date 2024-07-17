//singleton - contructor

const tinderuser = new Object()  //singleton obj
//const tinderuser1 = {}          //non singleton obj 

tinderuser.id = "123"
tinderuser.name="sam"
tinderuser.islogg =false
console.log(tinderuser);

const reg ={
    email:"wmwmw",
    fullname:{
        firstname:"ram",
        lastname:{
            middlename:"chandra",
            lasttname:"ki jai"
        }
    }
}
console.log(reg.fullname.lastname);


//combine obj
const obj1={ 1:"a",2:"b"}
const obj2={ 3:"c",4:"d"}
//const obj3 = {obj1, obj2}   here obj3 will have 2 objs as ele
const obj3 = Object.assign({},obj1, obj2)  //here first is the target and others all are source.
//{} will ensure we will get right combined in 

const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);

const users=[
    {
        id:1,
        email:"a@gmail.com",
    },
    {
        id:2,
        email:"a2@gmail.com",
    },
    {
        id:3,
        email:"a3@gmail.com",
    }
]
console.log(users[1].email);
console.log(tinderuser);

console.log(Object.keys(tinderuser));//keys return an array of all the ele
//[ 'id', 'name', 'islogg' ] like this. we can loop through this
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))//make each ele an array. overall return an array of arrays

console.log(tinderuser.hasOwnProperty('name')
);

