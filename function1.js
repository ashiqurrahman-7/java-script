//without return
function sum(x,y){
    const result = x+y;
    console.log(result);
}

sum(5,45);


//with return value
function sum2(x,y){
    const result2 = x+y;
   return result2;
}

const function_result = sum2(55,45);
console.log(function_result);



//3rd way 

function tenTimes(numbers){
    // const result = numbers*10;
    // return result;

    // oporer 2 line onno vhabe kora jai 

    return numbers*10;
}

const tenTimesResult = tenTimes(5);
console.log( tenTimesResult);