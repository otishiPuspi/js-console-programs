let item1_price = 250;
let item1_qty = 2;

let item2_price = 400;
let item2_qty = 1;

let item3_price = 150;
let item3_qty = 3;

// Calculate item totals
let item1_total = item1_price * item1_qty;
let item2_total = item2_price * item2_qty;
let item3_total = item3_price * item3_qty;

// Subtotal
let subTotal = item1_total + item2_total + item3_total;

// Discount (10% if subtotal > 1000)
let discount = 0;
if (subTotal > 1000) {
    discount = subTotal * 0.10;
}

// Tax (18%)
let tax = (subTotal - discount) * 0.18;

// Final Total
let finalTotal = (subTotal - discount) + tax;

// Show itemized bill
console.log("🧾 SHOPPING CART BILL");
console.log("------------------------");

console.log("Item 1: Price =", item1_price, "Qty =", item1_qty, "Total =", item1_total);
console.log("Item 2: Price =", item2_price, "Qty =", item2_qty, "Total =", item2_total);
console.log("Item 3: Price =", item3_price, "Qty =", item3_qty, "Total =", item3_total);

console.log("------------------------");
console.log("Subtotal:", subTotal);
console.log("Discount:", discount);
console.log("Tax (18%):", tax);
console.log("Final Total:", finalTotal);
