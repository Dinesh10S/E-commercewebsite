fetch("http://localhost:8080/api/orders")
  .then(res => res.json())
  .then(data => {

    const table = document.getElementById("orderTable");
    table.innerHTML = "";

    if (data.length === 0) {
      table.innerHTML = `
        <tr>
          <td colspan="5">No orders found</td>
        </tr>
      `;
      return;
    }

    data.forEach(o => {
      table.innerHTML += `
        <tr>
          <td>${o.orderId}</td>
          <td>${o.productName || "-"}</td>
          <td>${new Date(o.orderDate).toLocaleString()}</td>
          <td>₹${o.amount}</td>
          <td>${o.status}</td>
        </tr>
      `;
    });
  })
  .catch(err => {
    console.error(err);
    alert("Failed to load order history");
  });

function goHome() {
  window.location.href = "index.html";
}
