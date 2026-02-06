const products =[
    {name:'shirt',price : 1000, quantity:2},
    {name:'pant',price : 2000 ,quantity:1},
    {name:'shoe',price : 3000 ,quantity:1},
    {name:'belt',price : 1000,quantity:2},
    {name:'watch',price : 2000 ,quantity:1},
]

function getShoppingTotal(products){
    let total =0;
    for(const product of products){
        // console.log(product);
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}

const total = getShoppingTotal(products);
console.log(total);