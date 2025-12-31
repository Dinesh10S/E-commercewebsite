let cart = [];

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);

  if (existing) {
    existing.qty++;
    existing.total += price;
  } else {
    cart.push({ name, price, qty: 1, total: price });
  }

  updateCart();
}

function increaseQty(index) {
  cart[index].qty++;
  cart[index].total = cart[index].qty * cart[index].price;
  updateCart();
}

function decreaseQty(index) {
  if (cart[index].qty > 1) {
    cart[index].qty--;
    cart[index].total = cart[index].qty * cart[index].price;
  } else {
    cart.splice(index, 1);
  }
  updateCart();
}

function updateCart() {
  const cartTable = document.getElementById("cart-items");
  cartTable.innerHTML = "";
  let grandTotal = 0;

  cart.forEach((item, index) => {
    grandTotal += item.total;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>₹${item.price}</td>
      <td>
        <button onclick="decreaseQty(${index})">➖</button>
        ${item.qty}
        <button onclick="increaseQty(${index})">➕</button>
      </td>
      <td>₹${item.total}</td>
      <td><button onclick="removeItem(${index})">❌</button></td>
    `;
    cartTable.appendChild(row);
  });

  document.getElementById("total").textContent = grandTotal;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

/* ===============================
   🔴 BUY NOW – IMPORTANT PART
   =============================== */
function buyNow() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // 🟢 total amount
  const grandTotal = document.getElementById("total").innerText;
  localStorage.setItem("grandTotal", grandTotal);

  // 🟢 ellaa dress names combine pannrom
  const productNames = cart.map(item => item.name).join(", ");
  localStorage.setItem("lastProduct", productNames); // 🔴 BACKEND use pannum

  // 🟢 full cart save (future use)
  localStorage.setItem("cart", JSON.stringify(cart));

  window.location.href = "payment.html";
}
function goToHistory() {
  window.location.href = "order-history.html";
}

