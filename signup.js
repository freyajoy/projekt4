function validatePassword() {
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;

    if (password !== confirm_password) {
        document.getElementById("message").innerHTML = "Adgangskode er forkert"
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}


 /* Function to display selected image in the preview
 function previewImage(event) {
    // Get reference to the input element
    var input = event.target;

    var reader = new FileReader();

        // Set the image once loaded into FileReader
        reader.onload = function(e) {
            // Get the loaded image and display it
            var previewImage = document.getElementById('preview');
            previewImage.src = e.target.result;
        };

        // Load image file into FileReader
        reader.readAsDataURL(input.files[0]);
    }
    
}*/