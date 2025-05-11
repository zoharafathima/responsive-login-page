document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (!username || !password) {
    error.textContent = "Please enter both username and password.";
  } else {
    error.textContent = "";
    alert("Login successful!");
    // Add real authentication logic here
  }
});