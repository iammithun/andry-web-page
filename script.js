document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulating a database check
  const validUsername = "user";
  const validPassword = "password";

  const messageElement = document.getElementById('message');

  if (username === validUsername && password === validPassword) {
      messageElement.style.color = 'green';
      messageElement.textContent = 'Login successful!';
  } else {
      messageElement.style.color = 'red';
      messageElement.textContent = 'Incorrect username or password.';
  }
});
