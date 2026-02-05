// const name1 = 'Ashiqur Rahman';
// const part  = name1.slice(2,5); //means start from 2 index and first before 5
// console.log(part);


// const sentence = "This is Ashiqur Rahman Tushar";
// console.log(sentence.split()); //This will do nothing exactly show the given sentence
// console.log(sentence.split(''));//This will show the sentence in every letter and comma symbol
// console.log(sentence.split(' ')); //This will show spliting every word  .basically it checks white space and make them different string




//join()
const friends = ['rahim','karim','mamun','akil','javed'];
console.log( friends.join());
console.log(friends.join(' + '));
console.log(friends.join(' - '));
console.log(friends.join(' | '));



//practice
const first = 'Ashiqur';
const last = 'Rahman';
const fullName = first + last;
console.log(fullName); //AshiqurRahman 


const fullName2 = first + ' ' + last;
console.log(fullName2);  //Ashiqur Rahman


const fullName3 = first.concat(last);
console.log(fullName3);  //AshiqurRahman


const fullName4 = first.concat(' ') .concat(last);
console.log(fullName4); //Ashiqur Rahman


//includes()
console.log(last.includes('n'));  //last silo rahman .rahman er moddhe    n     silo aijoono true show korbe
console.log(last.includes('d'));  //last e d silo na thats why false show korbe
 
