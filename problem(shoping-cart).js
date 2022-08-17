const shoppingCart = [
    { name: "shirt", price: 1200, quantity: 3 },
    { name: "pant", price: 2500, quantity: 2 },
    { name: "shoe", price: 3400, quantity: 2 },
];

function totalCost(products) {
    let sum = 0;
    for (i = 0; i < products.length; i++) {
        const product = products[i];
        const totalProduct = product.price * product.quantity;
        sum = sum + totalProduct;
    }
    return sum;
}
const totalAmount = totalCost(shoppingCart);
console.log('Total Amount you need  to pay now:',
    totalAmount);