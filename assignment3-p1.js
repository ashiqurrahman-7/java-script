function newPrice(currentPrice, discount) {
    // ইনপুট ভ্যালিডেশন
    if (
        typeof currentPrice !== "number" ||
        typeof discount !== "number" ||
        discount < 0 ||
        discount > 100
    ) {
        return "Invalid";
    }

    // calculating discount
    const discountAmount = (currentPrice * discount) / 100;
    const finalPrice = currentPrice - discountAmount;

    // get final price to 3 decimal 
    return finalPrice.toFixed(3);
}

const output = newPrice(1500,20);
const output2 = newPrice(2000,15);
const output3 = newPrice(1200,7);
const output4 = newPrice("1000",10);
const output5 = newPrice(2000,17.17);
const output6 = newPrice(500,"5");
console.log(output);
console.log(output2);
console.log(output3);
console.log(output4);
console.log(output5);
console.log(output6);
