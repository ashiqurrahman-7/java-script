
function add (a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}

function calculator (a,b ,operation){
    if(operation === 'add'){
        const result =  add(a,b);
        return result;
    }
    else if(operation === 'sub'){
        const result  = sub(a,b);
        return result;
    }
    else if(operation === 'mul'){
        const result = mul(a,b);
        return result;
    }
    else if(operation === 'div'){
        const result = div(a,b);
        return result;
    }
    else{
        console.log('only addition, subtraction,multiplication and divide is possible..');
    }
}
const result = calculator(50,7, 'sub');
console.log(result);