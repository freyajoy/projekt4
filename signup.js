function validatePassword() {
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm_password").value;

    if (password !== confirm_password) {
        document.getElementById("message").innerHTML = "Adgangskode er ikke ens"
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}

let ProfilePic = document.getElementById("profile-pic")
let inputFile = document.getElementById("input-file")

inputFile.onchange = function(){
    ProfilePic.src = URL.createObjectURL(inputFile.files[0])
}