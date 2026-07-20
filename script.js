function toggleNav() {
  const nav = document.getElementById("myNav");
  nav.style.width = nav.style.width === "100%" ? "0%" : "100%";
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
