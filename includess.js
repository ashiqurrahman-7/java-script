const players =  ['messi', 'ronaldo','mbappe','neymar','pogba','suarez'];

console.log(players.includes('ronaldo')); //true
console.log(players.includes('Ronaldo')); //false

if(players.includes('Messi')){
    console.log('will get ballon dor');
}
else{
    console.log("Ronaldo will get ballon dor");
}


console.log(players.indexOf('Neyman')); // if it not found in array it will show  -1 
console.log(players.indexOf('neymar'));  //3