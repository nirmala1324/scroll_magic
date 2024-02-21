import React, { useEffect } from "react";
import ScrollMagic from "scrollmagic";

function Scroll() {
  const data = [
    { jenis: "Tipe Mesin", isi: "4-Langkah, SOHC, eSP" },
    {
      jenis: "Sistem Suplai Bahan Bakar",
      isi: "PGM-FI (Programmed Fuel Injection)",
    },
    { jenis: "Diameter X Langkah", isi: "47,0 x 63,1 mm" },
    { jenis: "Tipe Tranmisi", isi: "Automatic, V-Matic" },
    { jenis: "Rasio Kompresi", isi: "10,0 : 1" },
    { jenis: "Daya Maksimum", isi: "6,6 kW (9,0 PS) / 7.500 rpm" },
    { jenis: "Torsi Maksimum", isi: "9,3 Nm (0,95 kgf.m) / 5.500 rpm" },
    { jenis: "Tipe Starter", isi: "Elektrik dan Kick Starter" },
    { jenis: "Tipe Kopling", isi: "Automatic Centrifugal Clutch Dry Type" },
  ];

  const data2 = [
    {
      jenis: "Tipe Rangka",
      isi: "Underbone - eSAF (Enhanced Smart Architecture Frame)",
    },
    { jenis: "Tipe Suspensi Depan", isi: "Telescopic" },
    {
      jenis: "Tipe Suspensi Belakang",
      isi: "Swing Arm dengan Suspensi Tunggal",
    },
    { jenis: "Ukuran Ban Depan", isi: "100/90 - 12 59J (Tubeless)" },
    { jenis: "Ukuran Ban Belakang", isi: "110/90 - 12 64J (Tubeless)" },
    { jenis: "Rem Depan", isi: "Cakram Hidrolik Piston Tunggal" },
    { jenis: "Rem Belakang", isi: "Tromol" },
    { jenis: "Sistem Pengereman", isi: "Combi Brake System" },
  ];

  useEffect(() => {
    // Create a ScrollMagic Controller
    const controller = new ScrollMagic.Controller();

    const addScene = (trigger, element) => {
      new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook: 0.9,
        duration: "80%",
        offset: 0.3,
      })
        .setClassToggle(element, "visible")
        .addIndicators() // You can remove this line in production
        .addTo(controller);
    };

    addScene("#motor1", "#motor1");
    addScene("#judul1", "#judul1");
    addScene("#data1", "#data1");
    addScene("#motor2", "#motor2");
    addScene("#judul2", "#judul2");
    addScene("#data2", "#data2");
  }, []);

  return (
    <>
      <style>{`
        .visible {
          opacity: 1;
          -webkit-transform: none;
          -moz-transform: none;
          -ms-transform: none;
          -o-transform: none;
          transform: none;
        }

        .animated-section {
          opacity: 0;
          -webkit-transform: translateX(-40px);
          -moz-transform: translateX(-40px);
          -ms-transform: translateX(-40px);
          -o-transform: translateX(-40px);
          transform: translateX(-40px);
          -webkit-transition: all 0.6s ease-out;
          -moz-transition: all 0.6s ease-out;
          -ms-transition: all 0.6s ease-out;
          -o-transition: all 0.6s ease-out;
          transition: all 0.6s ease-out;
        }

        .animated-section2 {
            opacity: 0;
            -webkit-transform: translateX(40px);
            -moz-transform: translateX(40px);
            -ms-transform: translateX(40px);
            -o-transform: translateX(40px);
            transform: translateX(40px);
            -webkit-transition: all 0.6s ease-out;
            -moz-transition: all 0.6s ease-out;
            -ms-transition: all 0.6s ease-out;
            -o-transition: all 0.6s ease-out;
            transition: all 0.6s ease-out;
          }

        #motor1.visible,
        #judul1.visible,
        #data1.visible,
        #motor2.visible,
        #judul2.visible,
        #data2.visible {
          opacity: 1;
          -webkit-transform: none;
          -moz-transform: none;
          -ms-transform: none;
          -o-transform: none;
          transform: none;
        }
      `}</style>

      <section>
        <div className="title">Spesifikasi Motor Honda Genio</div>
        <div className="section" id="section1">
          <div className="image-section animated-section" id="motor1">
            {/* Isi bagian gambar besar di sini */}
            <img
              src="produk 1.png"
              alt="Gambar 1"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="text-section">
            {/* Isi bagian teks di sini */}
            <h1 className="animated-section" id="judul1" style={{ marginLeft: "97px", fontSize: "35px" }}>
              Mesin
            </h1>
            <div
              id="data1"
              className="animated-section"
              style={{
                display: "grid",
                gap: "20px",
                marginTop: "50px",
                marginRight: "90px",
              }}
            >
              {data.map((item, index) => (
                <div key={index} className="data">
                  <div
                    style={{
                      flex: 1,
                      justifyContent: "flex-start",
                      fontWeight: "bold",
                    }}
                  >
                    {item.jenis}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      justifyContent: "flex-start",
                      fontWeight: "400",
                    }}
                  >
                    {item.isi}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="section" id="section2">
          <div className="text-section animated-section" id="motor2">
            {/* Isi bagian teks di sini */}
            <h1
              id="judul2"
              className="animated-section"
              style={{
                marginLeft: "97px",
                marginTop: "100px",
                fontSize: "35px",
              }}
            >
              Rangka & Kaki - Kaki
            </h1>
            <div
              id="data2"
              className="animated-section"
              style={{
                display: "grid",
                gap: "20px",
                marginTop: "50px",
                marginRight: "90px",
              }}
            >
              {data2.map((item, index) => (
                <div key={index} className="data">
                  <div
                    style={{
                      flex: 1,
                      justifyContent: "flex-start",
                      fontWeight: "bold",
                    }}
                  >
                    {item.jenis}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      justifyContent: "flex-start",
                      fontWeight: "400",
                    }}
                  >
                    {item.isi}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="image-section animated-section2" id="motor2">
            {/* Isi bagian gambar besar di sini */}
            <img
              src="produk 2.png"
              alt="Gambar 1"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Scroll;
