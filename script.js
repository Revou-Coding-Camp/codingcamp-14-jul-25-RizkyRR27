function greetUser() {
  const name = document.getElementById("nameInput").value;
  const greeting = document.getElementById("greeting");
  greeting.textContent = `Hi ${name}, welcome to our website!`;
}

function handleSubmit(event) {
  event.preventDefault();
  const msg = document.getElementById("message").value;
  const output = document.getElementById("messageOutput");
  output.textContent = `You said: "${msg}"`;
  return false;
}
