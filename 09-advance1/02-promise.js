const promise1 = new Promise(function(resolve, reject){
    //do async task
    //db calls, cryptography
    setTimeout(function(){
        console.log('async is complete');
        resolve()
    }, 1000)
})

//consumption

promise1.then(function(){        //.then is connected to resolve
    console.log('promise consumed');   
    
})
//promise is always consumed after the resolve


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task2");
        resolve()
        
    }, 1000)
}).then(()=>{
    console.log("async2 resolved");
    
})

const promise3 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve({username:"chai", email:"abc@gmail.com"})

    },1000)
})

promise3.then(function(user){
    console.log(user);
    
       
})


//reject usage
const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:'anjali',password:'123'})
        }else{
            reject('error occur')
        }
    },1000)
})
//consumption
promise4
.then((user)=>{
    console.log(user);
    return user.username
    
})
.then((username)=>{       //chaining. the value returned from above .then is the parameter for this .then
   console.log(username);
   
})
.catch((error)=>{
    console.log(error);
    
}).finally(()=>{      //always execute, kind of default
console.log('this is finally block');

})

//async await. used for comsumption.catch isnot handled gracefully.
const promise5 = new Promise((resolve, reject)=>{
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:'javascript',password:'123'})
        }else{
            reject('error occur in promise5')
        }
    },1000)
})

// async function consumee(){
// const res = await promise5
// console.log(res);
// }
//here we have assumed that promise5 will always be true and gives us value.
//if error occurs, we need to handle it. dont handle errors directtly
//try/catch
async function consumee(){
    try{
        const res = await promise5
    console.log(res);
    }catch(error){
        console.log(error); 
    }
    }
consumee()


async function getuser(){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data =await res.json()   //converting to json also takes time, so use await
        console.log(data);
    } catch (error) {
        console.log(error);
        
    }
    
}
getuser()


//promise5 using then catch
fetch('https://jsonplaceholder.typicode.com/users')
 .then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log("error");
    
})



















