function validatePassword() {
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;

    if (password !== confirm_password) {
        document.getElementById("message").innerHTML = "Adgangskode er forkert"
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}