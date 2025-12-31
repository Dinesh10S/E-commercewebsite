// generate fake order id
const orderId = "BB" + Math.floor(Math.random() * 1000000);
document.getElementById("orderId").innerText = orderId;

// save order id for history
let orders = JSON.parse(localStorage.getItem("orders")) || [];
orders.push({
    orderId: orderId,
    date: new Date().toLocaleString(),
    amount: localStorage.getItem("lastPaidAmount"),
    status: "Confirmed"
});
localStorage.setItem("orders", JSON.stringify(orders));

function goHome() {
    window.location.href = "index.html";
}

function goHistory() {
    window.location.href = "order-history.html";
}
