const phones = [
    {name:'samsung',price:35000, color:'black'},
    {name:'xiaomi',price:25000, color:'white'},
    {name:'vivo',price:45000, color:'platinum'},
    {name:'iphone',price:135000, color:'black'},
]

function getCheapestPhone(phones) {
    let min = phones[0];

    for (const phone of phones) {
        if (phone.price < min.price) {   // 👈 change here
            min = phone;
        }
    }
    return min;
}

console.log(getCheapestPhone(phones));
