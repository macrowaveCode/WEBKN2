// Kalau kamu ingin menambahkan interaksi dropdown bahasa nantinya
document.querySelector(".language-dropdown").addEventListener("click", function () {
    alert("Fitur pilih bahasa coming soon!");
  });
  
  function scrollCarousel(direction) {
    const carousel = document.getElementById('carousel');
    const scrollAmount = 420; // sedikit lebih dari lebar kartu untuk efek snap
  
    carousel.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
  
  // Sementara belum ada interaksi JS, bisa digunakan untuk animasi tambahan nanti
console.log("Tentang Kami section loaded.");

// Bisa dikembangkan jika ada interaksi (misal buka popup atau animasi scroll)
console.log("Lokasi Kami section loaded");
