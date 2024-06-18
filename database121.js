// Simulated user database with randomly generated credentials
const database = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
  { username: "user3", password: "password3" },
  { username: "user4", password: "password4" },
  { username: "user5", password: "password5" }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const messageElement = document.getElementById('message');

  // Check if username and password are correct
  const user = database.find(user => user.username === username && user.password === password);

  if (user) {
      messageElement.textContent = "Success!";
      messageElement.className = "message success";
  } else {
      messageElement.textContent = "Error: Incorrect username or password.";
      messageElement.className = "message error";
  }
});
