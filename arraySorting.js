const person = ['rakib','nokib','saiful','alif','demba'];
const sortedPerson = person.sort();
console.log(sortedPerson);

//but but but ay sort() function er ekta problem ase seta number sort korte gele dekha jaabe
const numbers = [3,7,12,8,43,6,1];
const sortNumbers = numbers.sort();
console.log(sortNumbers);  /*[1, 12, 3, 43 , 6 , 7 , 8] */
//ekehane first word priority passe 1 er por first ee 12 er 1 ase dekhe 12 ke priority disse



console.log('------------------------------------------------------------------');

//function use korle eita thik kora jaaaayyyy
const numbers_asc = numbers.sort(function(a,b){return a-b});
console.log(numbers_asc);


console.log('-------------------------------------------------------------------');
const numbers_dsc = numbers.sort(function(a,b){return b-a});
console.log(numbers_dsc);