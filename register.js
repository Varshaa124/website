/*register*/
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const batch = document.getElementById("batch").value;
      const role = document.getElementById("role").value;
      const pass = document.getElementById("pass").value.trim();
      const confirmPass = document.getElementById("confirmPass").value.trim();
      const profilePic = document.getElementById("profilePic").files[0];
  
      // Validation
      if (!name || !email || !phone || !batch || !role || !pass || !confirmPass) {
        alert("Please fill in all required fields.");
        return;
      }
  
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(email)) {
        alert("Enter a valid email address.");
        return;
      }
  
      const phonePattern = /^[6-9]\d{9}$/;
      if (!phonePattern.test(phone)) {
        alert("Enter a valid 10-digit phone number.");
        return;
      }
  
      if (pass.length < 6) {
        alert("Password should be at least 6 characters.");
        return;
      }
  
      if (pass !== confirmPass) {
        alert("Passwords do not match.");
        return;
      }
  
      if (profilePic && !profilePic.type.startsWith("image/")) {
        alert("Please upload a valid image file for profile picture.");
        return;
      }
  
      alert("Registration successful (simulated)!");
      form.reset();
    });
  });
  