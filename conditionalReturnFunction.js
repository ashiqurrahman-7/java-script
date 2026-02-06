function isEven(number){
    if(number%2 ===0){
        console.log(number,"is a even number");
        return true;
        
    }
    else{
        console.log(number, "is not a even number");
        return false;
    }
}
console.log(isEven(5));
console.log(isEven(6));

