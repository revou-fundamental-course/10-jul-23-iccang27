// get input

// get result
const hasil = document.getElementsByClassName("hasil");

//menghitung imt lalu menampilkannya dengan fungsi addHTML()
function hitungIMT(tinggi, berat) {
  //menghitung imt
  let imt = berat / (tinggi * tinggi);
  //konversi dari pecahan ke bulat
  let arrAngka = imt.toString().split("");
  let arrah = [];
  for (let i = 0; i < arrAngka.length; i++) {
    if (arrAngka[i] !== "0" && arrAngka[i] !== ".") {
      arrah.push(arrAngka[i]);
    }
  }
  // hasil imt yang sudah di bulatkan
  imt = parseInt(arrah.slice(0, 2).join(""));

  //KeteranganBerat
  let keteranganBerat = "";
  let kategoriBerat = "";
  let deskripsi = "";
  // memilih kategori berat
  if (imt < 17) {
    kategoriBerat = "Berat badan kurang";
    keteranganBerat = "Tubuh anda tergolong kurus";
    deskripsi =
      "Anda berada dalam kondisi tubuh yang kekurangan berat badan. Cara terbaik untuk menaikkan berat badan adalah dengan mengonsumsi makanan yang kaya nutrisi, meningkatkan asupan kalori, dan melakukan latihan kekuatan untuk membangun otot";
  } else if (imt >= 18.5 && imt < 24.9) {
    kategoriBerat = "Berat badan ideal";
    keteranganBerat = "Tubuh anda sudah ideal dan normal";
    deskripsi =
      "Anda berada dalam kategori berat badan normal atau ideal, pertahankan berat badan anda, tetap jaga pola makan.";
  } else if (imt >= 24.9 && imt < 29.9) {
    kategoriBerat = "Berat badan berlebih";
    keteranganBerat = "Tubuh anda tergolong gemuk";
    deskripsi =
      "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang di komsumsi dan berolahraga.";
  } else {
    kategoriBerat = "Obesitas";
    keteranganBerat =
      "Tubuh anda tergolong kelebihan berat badan tingkat extreme";
    deskripsi =
      "Anda dalam kategori berat badan berlebih tingkat extreme kemungkinan anda menderita penyakit obesitas. Utamakan mengomsumsi bahan makanan sumber protein rendah lemak, seperti ikan, dan putih telur. Jika berat badan tak kunjung menurun segeralah periksa ke dokter.";
  }

  addHTML(kategoriBerat, imt, keteranganBerat, deskripsi);
}

// fungsi menampilkan hasil
function addHTML(kategori, imt, keterangan, deskripsi) {
  let container = document.getElementById("hasil");
  container.innerHTML =
    '<h2>Hasil</h2><div><h3 id="kategoriBerat"></h3><p id="imt"></p><p id="keteranganBerat"></p><button class="btn1 download">Download Hasil BMI</button></div><article><p id="deskripsi"></p></article>';
  document.getElementById("kategoriBerat").innerHTML = kategori;
  document.getElementById("imt").innerHTML = imt;
  document.getElementById("keteranganBerat").innerHTML = keterangan;
  document.getElementById("deskripsi").innerHTML = deskripsi;
}

//submit button
function submitBtn() {
  //get input
  const berat = document.getElementById("berat").value;
  const tinggi = document.getElementById("tinggi").value;
  const usia = document.getElementById("usia").value;
  let radios = document.getElementsByName("gender");
  console.log(radios);
  if (berat == "" || tinggi == "" || usia == "") {
    alert("silahkan isi bagian yang kosong atau pilih gender kamu!");
  } else {
    hitungIMT(tinggi, berat);
  }

  //reset button
  function resetBtn() {
    const berat = (document.getElementById("berat").value = "");
    const tinggi = (document.getElementById("tinggi").value = "");
    const usia = (document.getElementById("usia").value = "");

    let radios = document.getElementsByName("gender");
    for (var i = 0; i < radios.length; i++) {
      radios[i].checked = false;
    }
  }
}
