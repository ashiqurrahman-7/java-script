
//This is basic uppercase and lowercase 
const name1 = 'Ashiqur Rahman ';
console.log(name1);

console.log(name1.toUpperCase());
console.log(name1.toLowerCase());




//Now ,i practice a problem where i use two variable and make them lowercase to compare them..
const email1 = 'rahmanashiqir99@gmail.com';
const email2 = 'RAHmanAshiQir99@Gmail.Com';

if(email1.toLowerCase() === email2.toLowerCase()){
    console.log("Email verified succussfully");
}
else{
    console.log("Verification unsuccessfull..");
}