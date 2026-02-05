const bottle ={brand: 'Apple',color:'White',price:45, isClean:true}
console.log(bottle); //{ brand: 'Apple', color: 'White', price: 45, isClean: true }

//dot symbol dia object er value access kora jay
console.log(bottle.brand);
console.log(bottle.price);
console.log(bottle.isClean);

//Third bracket diyeo value access kora jay
console.log(bottle['color']);



//update using dot and 3rd bracket
bottle.brand ='Tesla';
bottle['color'] = 'red';
console.log(bottle);





//access and update using keyName
//access:
const keyName = 'price';
console.log(bottle[keyName]);

//update:
const keyNames = 'price';
bottle[keyNames] = 500;
console.log(bottle);
