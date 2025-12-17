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
