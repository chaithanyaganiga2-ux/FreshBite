let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
  document.getElementById("cartCount").textContent = cart.length;
}

function updateCart() {
  const items = document.getElementById("cartItems");

  if (cart.length === 0) {
    items.textContent = "No items added yet.";
    document.getElementById("total").textContent = "0";
    return;
  }

  items.innerHTML = cart.map((item, i) =>
    `${i + 1}. ${item.name} - ₹${item.price}`
  ).join("<br>");

  document.getElementById("total").textContent = total;
}

function placeOrder() {
  if (cart.length === 0) {
    alert("Please add an item to the cart first.");
    return;
  }

  alert("Order placed successfully! Thank you for choosing FreshBite.");
}
