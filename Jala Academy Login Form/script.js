
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "training@jalaacademy.com" && password === "jobprogram") {
        var message = document.getElementById("message");
        message.textContent = "Login successful! Email: " + email + ", Password: " + password;
    } else {
        alert("Invalid email or password. Please try again.");
    }
});