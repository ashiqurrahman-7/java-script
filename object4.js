const mobile = {
    brand:'samsung',
    price: 25000,
    color: 'black',
    camera:'12mp'
}

console.log(mobile);   //{ brand: 'samsung', price: 25000, color: 'black', camera: '12mp' }

for(const prop in mobile){
    // console.log(prop);
    console.log(prop , ' ---',mobile[prop]); 
}



const keys =Object.keys(mobile);
console.log(keys);