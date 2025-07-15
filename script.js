function Submit(){

var fname=document.getElementById('fname')
var lname=document.getElementById('lname')

var email=document.getElementById('email')
var address=document.getElementById('address')
var fullname=fname.value+" "+lname.value
console.log(fullname)
console.log(email.value)
console.log(address.value)
}