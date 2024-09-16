const accountId = 12345                
let accEmail = "anjali@google.com"
var accPassword = "123"
accCity = "hyd" 

//accountId = 2    //error. const cant be changed

accEmail = "asdf@rllt.com"    //let can see block. by default = undefined
accPassword = "456"          // var is not used frequently. it cannot see block scope.
accCity = "blr"
console.log(accEmail)
console.log(accPassword)
console.log(accCity)
console.table([accEmail, accPassword, accCity]);
