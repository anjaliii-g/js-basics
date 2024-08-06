const promise1 = new Promise(function(resolve, reject){
    //do async task
    //db calls, cryptography
    setTimeout(function(){
        console.log('async is complete');
        
    }, 1000)
})

//consumption

promise1.then(function(){
    console.log('promise consumed');
    
})