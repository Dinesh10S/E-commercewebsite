function login() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        document.getElementById("msg").innerText = "Please fill all fields";
        return;
    }

    fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(response => response.text())
    .then(result => {
        console.log(result); // DEBUG

        if (result === "SUCCESS") {
            window.location.href = "index.html"; // main page
        } else {
            document.getElementById("msg").innerText = "Invalid email or password";
        }
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("msg").innerText = "Server not reachable";
    });
}
