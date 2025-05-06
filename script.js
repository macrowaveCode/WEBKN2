// Kalau kamu ingin menambahkan interaksi dropdown bahasa nantinya
document.querySelector(".language-dropdown").addEventListener("click", function () {
    alert("Fitur pilih bahasa coming soon!");
  });
  
  function scrollCarousel(direction, buttonElement) {
    const carousel = buttonElement.closest('.carousel-section, .carousel-section2').querySelector('.carousel');
    const scrollAmount = 420;
  
    carousel.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
    
  
  // Sementara belum ada interaksi JS, bisa digunakan untuk animasi tambahan nanti
console.log("Tentang Kami section loaded.");

// Bisa dikembangkan jika ada interaksi (misal buka popup atau animasi scroll)
console.log("Lokasi Kami section loaded");
