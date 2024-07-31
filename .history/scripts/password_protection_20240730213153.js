function checkPassword() {
    const passwordInput = document.getElementById("password");
    // Replace with secure password storage (e.g., server-side hashing)
    const correctPasswordHash = "6122";
  
    // Assuming you have a hashing function available
    const hashedInputPassword = hashPassword(passwordInput.value);
  
    if (hashedInputPassword === correctPasswordHash) {
      window.location.href = "index.html"; // Replace with the path to your protected content
    } else {
      // Handle incorrect password, e.g., display an error message
      const errorMessage = document.getElementById("error-message");
      if (errorMessage) {
        errorMessage.textContent = "Incorrect password";
      } else {
        alert("Incorrect password"); // Fallback if error message element not found
      }
    }
  }
  