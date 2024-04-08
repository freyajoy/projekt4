

function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        document.getElementById("message").textContent = "Passwords do not match!";
        return false;
    } else {
        document.getElementById("message").textContent = "Passwords match.";
        // You can also add code here to submit the form
        return true;
    }
}