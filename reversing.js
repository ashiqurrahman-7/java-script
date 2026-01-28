const numbers = [1,2,3,4,5,6,7];
const rev_numbers = [];

for(let i= numbers.length-1;i>=0;i--){
    const num =numbers[i];
    console.log(num);
    rev_numbers.push(num);
}
console.log(rev_numbers);