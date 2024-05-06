document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Form validation
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var message = document.getElementById("message").value.trim();
    
    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }
    
    // Email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Phone validation (simple check for numeric input)
    if (isNaN(phone)) {
        alert("Please enter a valid phone number.");
        return;
    }
    
    // Send form data to server (placeholder)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);
});
