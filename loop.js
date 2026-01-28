const mobile ={
    brand:'samsung',
    color:'black',
    price: 46000,
    camera: '12mp'
}
// console.log(mobile);

// for(const prop in mobile){
//     console.log(prop);
//     console.log(mobile[prop]);
// }


const  keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){
    console.log(key,' ',mobile[key]);
}
