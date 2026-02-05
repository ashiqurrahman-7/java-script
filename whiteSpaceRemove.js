const password1 = 'water';
const password2 = '  water ';  //trim use kore start and end er white space remove kora jai but  word er middle e white space remove kora jay na
if(password1.trim() === password2.trim()){
    console.log("Correct password");
}
else{
    console.log("Wrong password");
}