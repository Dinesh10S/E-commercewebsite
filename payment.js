document.getElementById("payAmount").innerText =
    localStorage.getItem("grandTotal") || 0;

function placeOrder() {

    const selected =
        document.querySelector('input[name="payment"]:checked');

    if (!selected) {
        alert("Please select a payment method");
        return;
    }

    const orderData = {
        orderId: "ORD" + Date.now(),
        amount: Number(localStorage.getItem("grandTotal")),
        paymentMethod: selected.value,
        status: "PLACED",
        productName: localStorage.getItem("lastProduct") || "Dress"
    };

    fetch("http://localhost:8080/api/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(orderData)
    })
    .then(res => res.json())
    .then(data => {
        window.location.href = "order-success.html";
    })
    .catch(err => {
        console.error(err);
        alert("Order failed");
    });
}
