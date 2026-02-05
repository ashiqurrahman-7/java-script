const numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers);

//1st way to do reverse an array
const reverseArray = numbers.reverse();
console.log(reverseArray);



//2nd way to do reverse an array

    const rev_numbers = [];
for(const number of numbers){
    rev_numbers.unshift(number);
}
console.log(rev_numbers);



//3rd way to do reverse an array
const rev_numbers2 = [];
for(let i=numbers.length-1;i>=0;i--){
    const num = numbers[i];
    console.log(num);

    rev_numbers2.push(num);
}
console.log(rev_numbers2);