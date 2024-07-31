function checkPassword() {
  const passwordInput = document.getElementById("password");
  const correctPasswordHash = "6122";

  // Assuming you have a hashing function available
  const hashedInputPassword = hashPassword(passwordInput.value);

  console.log("Hashed input password:", hashedInputPassword);
  console.log("Correct password hash:", correctPasswordHash);

  if (hashedInputPassword === correctPasswordHash) {
    console.log("Password correct, redirecting...");
    window.location.href = "index.html"; // Replace with the desired URL
  } else {
    console.log("Incorrect password");
    // Handle incorrect password, e.g., display an error message
  }
}