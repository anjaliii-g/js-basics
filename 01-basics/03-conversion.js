let score = "33"
console.log(typeof score)     //string
let valuenum = Number(score)   //Number will ensure it is num
console.log(typeof valuenum)  //33

let score1 = Number("33aabbcc")
console.log(typeof score1)   //type is number
console.log(score1)         //NaN = not a number = special type

let score2 = Number(null)
console.log(typeof score2)   //type is number
console.log(score2)         //0

let score3 = Number(undefined)
console.log(typeof score3)   //type is number
console.log(score3)         //NaN

let score4 = Number(true)
console.log(typeof score4)   //type is number
console.log(score4)         //1

let score5 = Number("true")  //pure string
console.log(typeof score5)   //type is number
console.log(score5)          //NaN

//let variablename = Boolean("nameofvariable or any value")

let stringno = String(33)
console.log(typeof stringno) //stirng
console.log(stringno)        //33 

