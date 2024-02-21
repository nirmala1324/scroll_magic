import React from "react";

function Section() {
  return (
    <>
      <section className="container" style={{ marginTop: "190px" }}>
        <div>
          <img
            src="https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-1400,pr-true,f-auto/uploads/product-draft/banner/home-banner-genio-4-25072023-101050-1-25102023-074757.jpg"
            alt="Product Desktop Banner"
            data-v-e0b60dac=""
            fetchpriority="high"
          />
        </div>
        <div className="title">
          Honda Genio Terbaru 2024
          <br />
          #GEN_EKSIS
        </div>
        <div className="cards">
          <div className="card">
            <div>
              <img src="meter.png" alt="Gambar 1" />
            </div>
            <div style={{ marginLeft: "8px" }}>
              <b>Panel Meter Digital dengan Eco Indicator</b>
              <p style={{ fontWeight: "400" }}>
                Lebih informatif dan akurat dengan speedmeter, odometer, fuel
                meter, eco indicator, dan logo Genio yang menyala. (*warna dapat
                berubah sewaktu-waktu)
              </p>
            </div>
          </div>
          <div className="card">
            <div>
              <img src="bagasi.png" alt="Gambar 1" />
            </div>
            <div style={{ marginLeft: "8px" }}>
              <b>Bagasi Luas 14 Liter</b>
              <p style={{ fontWeight: "400" }}>
                Kapasitas U-Box besar (14L) dapat memuat lebih banyak barang
                bawaan.
              </p>
            </div>
          </div>
          <div className="card">
            <div>
              <img src="lampu.png" alt="Gambar 1" />
            </div>
            <div style={{ marginLeft: "8px" }}>
              <b>Lampu Depan LED</b>
              <p style={{ fontWeight: "400" }}>
                Sentuhan Modern dengan dimensi compact, memberikan penerangan
                yang maksimum saat berkendara di segala kondisi.
              </p>
            </div>
          </div>
          <div className="card">
            <div>
              <img src="kunci.png" alt="Gambar 1" />
            </div>
            <div style={{ marginLeft: "8px" }}>
              <b>Pengaman Kunci Kontak dengan Tombol Pembuka Jok</b>
              <p style={{ fontWeight: "400" }}>
                Lebih aman (mengurangi resiko pencurian) dan kemudahan membuka
                U-Box hanya dengan menekan tombol.
              </p>
            </div>
          </div>
          <div className="card">
            <div>
              <img src="charge.png" alt="Gambar 1" />
            </div>
            <div style={{ marginLeft: "8px" }}>
              <b>Power Charger di Rak Depan</b>
              <p style={{ fontWeight: "400" }}>
                Bisa terus Update dan eksis di mana saja lebih mudah dengan
                Power Charger untuk mengisi daya gadget.
              </p>
            </div>
          </div>
          <div className="card">
            <div>
              <img src="ban.png" alt="Gambar 1" />
            </div>
            <div style={{ marginLeft: "8px" }}>
              <b>Ban & Velg 12 Inci</b>
              <p style={{ fontWeight: "400" }}>
                Dilengkapi ban tubeless yang menambah keamanan & kenyamanan
                dalam berkendara dengan desain yang trendy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;
