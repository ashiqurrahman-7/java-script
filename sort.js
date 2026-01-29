const numbers = [4,7,12,8,43,6,1];


//This is not working properly ..it compare with the first digit  
// const sort_numbers = numbers.sort();
// console.log(sort_numbers); // 1,12,4,43,6,7,8 

const numbers_asc = numbers.sort(function(a,b){return a-b});
console.log(numbers_asc);


const numbers_dsc = numbers.sort(function(a,b){return b-a});
console.log(numbers_dsc);