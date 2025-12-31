function signup() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
    const msg = document.getElementById("msg");

    // clear old message
    msg.innerText = "";

    // 1️⃣ Empty validation
    if (!name || !email || !phone || !password || !confirm) {
        msg.innerText = "Please fill all fields";
        return;
    }

    // 2️⃣ Password match check
    if (password !== confirm) {
        msg.innerText = "Passwords do not match";
        return;
    }

    fetch("http://localhost:8080/api/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            password: password
        })
    })
    .then(res => res.text())
    .then(data => {
        console.log("Response:", data); // DEBUG

        if (data === "SUCCESS") {
            alert("Signup successful");
            window.location.href = "login.html";
        } else if (data === "EMAIL_EXISTS") {
            msg.innerText = "Email already exists";
        } else {
            msg.innerText = "Signup failed";
        }
    })
    .catch(err => {
        console.error(err);
        msg.innerText = "Server not reachable";
    });
}
