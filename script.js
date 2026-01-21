let produk = JSON.parse(localStorage.getItem("produk")) || [];


function tampilkanProduk() {
  const container = document.getElementById("produk");
  container.innerHTML = "";

  produk.forEach((item, index) => {
    container.innerHTML += `
      <div class="card">
        <img src="${item.gambar}">
        <div class="card-content">
          <h3>${item.nama}</h3>
          <p>Rp ${item.harga}</p>
          <button onclick="tambahKeKeranjang(${index})">
            Tambah ke Keranjang
          </button>
        </div>
      </div>
    `;
  });
}


function tambahProduk() {
const nama = document.getElementById("nama").value;
const harga = document.getElementById("harga").value;
const gambar = document.getElementById("gambar").value;


if (!nama || !harga || !gambar) {
alert("Lengkapi semua data!");
return;
}


produk.push({ nama, harga, gambar });
tampilkanProduk();


document.getElementById("nama").value = "";
document.getElementById("harga").value = "";
document.getElementById("gambar").value = "";
}


function hapusProduk(index) {
produk.splice(index, 1);
tampilkanProduk();
}


tampilkanProduk();
