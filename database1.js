const database = {
  username: "mithunsai",
  password: "mithunsai"
};

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const messageElement = document.getElementById('message');

  if (username === database.username && password === database.password) {
      messageElement.textContent = "Success!";
      messageElement.className = "message success";
  } else {
      messageElement.textContent = "Error: Incorrect username or password.";
      messageElement.className = "message error";
  }
}
