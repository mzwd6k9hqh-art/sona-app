// Simulate logged-in member (replace with Whop User check)
const whopUser = { id: 123, username: "Abed Dria" };

if (!whopUser) {
  document.body.innerHTML = "<h2>Members Only ❌</h2>";
} else {
  document.getElementById("username").innerText = whopUser.username;
  // Simulate data
  document.getElementById("membersCount").innerText = 42;
  document.getElementById("productsCount").innerText = 5;
}

async function askAI() {
  const input = document.getElementById("userInput").value;
  const responseBox = document.getElementById("aiResponse");
  responseBox.innerHTML = "Thinking... ⏳";

  const res = await fetch("/api/ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: input })
  });

  const data = await res.json();
  responseBox.innerHTML = data.reply;
}
