// JavaScript untuk mengatur animasi saat hover pada foto profil
const profileImg = document.querySelector(".profile img");

profileImg.addEventListener("mouseover", function () {
  this.style.transform = "scale(1.2)"; // Perbesar gambar saat hover
});

profileImg.addEventListener("mouseout", function () {
  this.style.transform = "scale(1)"; // Kembalikan ukuran asli saat mouse keluar
});