
function greetUser() {
  const name = document.getElementById("nameInput").value.trim();
  const greeting = document.getElementById("greeting");
  greeting.textContent = name ? `Hello, ${name}` : "Hello";
}

function fillColor(box) {
  const color = box.textContent.toLowerCase();
  box.style.backgroundColor = color;
  box.style.color = (color === "yellow") ? "#000" : "#fff";
}
