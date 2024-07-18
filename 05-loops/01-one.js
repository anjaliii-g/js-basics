//for
 
for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);  
}

for (let i = 0; i < 10; i++) {
    console.log(`outer ${i}`);
    for (let j = 0; j < 10; j++) {
        const element = j;
        //console.log(`inner ${j}`);

    }
    
}

let myhero = ["flash", "batman","spiderman"]
for (let i = 0; i < myhero.length; i++) {
     console.log(myhero[i]);
    
}

//break = to break any control flow we use
//continue = to skip any particular iteration

