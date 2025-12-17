const whop = window.whopIframeSdk;


).then(user => {
  doc
// جلب بيانات المستخدم
whop.getUser
(ument.getElementById("username").innerText =
    `Welcome, ${user.username}`;
});

// جلب الأعضاء
whop.getMembers().then(res => {
  document.getElementById("members").innerText =
    `Total members: ${res.members.length}`;
});

// إرسال رسالة للأعضاء
function sendMessage() {
  whop.sendMessage({
    content: "Hello from Sona Creator Control 🚀"
  });
}

// تحديث البيانات
function refresh() {
  location.reload();
}
// استقبال بيانات المستخدم من Whop
window.addEventListener("message", (event) => {
  if (!event.data) return;

  if (event.data.type === "whop:user") {
    document.getElementById("username").innerText =
      "Welcome, " + event.data.user.username;
  }
});

// أداة مفيدة للمنشئ
function generateIdea() {
  const ideas = [
    "Create a 7-day challenge for your members",
    "Offer a limited-time bonus to boost conversions",
    "Post a behind-the-scenes update today",
    "Add a beginner onboarding guide",
    "Launch a weekly Q&A session"
  ];

  const idea = ideas[Math.floor(Math.random() * ideas.length)];
  document.getElementById("output").innerText = idea;
}
