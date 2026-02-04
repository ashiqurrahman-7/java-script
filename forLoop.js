
//print  0-20 using for loop
for(let i=0;i<=20;i++){
    console.log(i);
}

console.log('------------------------------------------');

//print odd number between 1-20
for (let n=1; n<=20; n =n+2){
    console.log(n);
}


console.log('------------------------------------------');

//print odd number between 1-20 and sum of them 
let sums =0
for (let n=1; n<=20; n =n+2){
    console.log(n);
    sums = sums + n;
}
console.log('sum is:' ,sums);



console.log('---------------------------------------------');



//print 1 to 30 which is divisible by 5
for(let k=0;k<=30;k++){
    if(k%5 ===0){
        console.log(k);

    }
}