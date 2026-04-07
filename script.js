const products = [
  {
    name: "Bơm thủy lực",
    image: "https://via.placeholder.com/300",
    desc: "Hoạt động mạnh mẽ, bền bỉ"
  },
  {
    name: "Lọc dầu",
    image: "https://via.placeholder.com/300",
    desc: "Bảo vệ động cơ tối đa"
  },
  {
    name: "Xi lanh",
    image: "https://via.placeholder.com/300",
    desc: "Nâng hạ mượt, ổn định"
  },
  {
    name: "Phụ tùng động cơ",
    image: "https://via.placeholder.com/300",
    desc: "Chính hãng, độ bền cao"
  }
];

const container = document.getElementById("product-list");

products.forEach(p => {
  container.innerHTML += `
    <div class="card">
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <button onclick="contact()">Nhận báo giá</button>
    </div>
  `;
});

// ZALO / MESSENGER
function contact() {
  window.open("https://zalo.me/your-number", "_blank");
}

// FORM
function submitForm() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  if (!phone) {
    alert("Nhập số điện thoại!");
    return;
  }

  alert("Đã gửi! Sẽ có người liên hệ bạn.");

  console.log("Lead:", name, phone);
}
