//date is object
let mydate = new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toLocaleDateString());

console.log(Date.now());

console.log(mydate.getFullYear());

console.log(mydate.toLocaleString('default',{
    weekday: "long",
}));