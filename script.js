function toggleNav() {
  const nav = document.getElementById("myNav");
  nav.style.width = nav.style.width === "100%" ? "0%" : "100%";
}
function showPage(pageId) {
  // Sembunyikan semua elemen dengan class 'page'
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  
  // Tampilkan halaman yang dipilih
  document.getElementById(pageId).classList.add('active');
  
  // Tutup menu navigasi setelah memilih
  toggleNav();
}

async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      alert("Terhubung ke: " + accounts[0]);
    } catch (error) {
      alert("Koneksi dibatalkan.");
    }
  } else {
    alert("MetaMask tidak terdeteksi!");
  }
}
