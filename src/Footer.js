import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div>
            <a href="/">
              <img
                width="150"
                height="25"
                src="https://ik.imagekit.io/zlt25mb52fx/ahmcdn/assets/images/logo/honda.svg"
                alt="Honda Logo"
              />
            </a>
          </div>
          <div className="footer-columns">
            <div className="footer-column" style={{ paddingRight: "50px" }}>
              <ul>
                <li>Corporate</li>
                <li>Products</li>
                <li>After Sales</li>
                <li>Highlight</li>
                <li>Press Release</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="footer-column">
              <div
                style={{
                  background: "black",
                  borderRadius: "20px",
                  padding: "40px",
                }}
              >
                <h2>Newsletter</h2>
                <p style={{fontWeight:"400" }}>
                  Yuk jadi orang pertama yang mengetahui info produk dan promo
                  terbaru sepeda motor Honda
                </p>
                <button
                  style={{
                    borderRadius: "10px",
                    background: "red",
                    textAlign: "center",
                    width: "130px",
                    height: "50px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="footer-column">
              <div style={{ padding: "24px 24px 24px 50px" }}>
                <div>
                  <img
                    width="178"
                    height="80"
                    src="https://asset.astra-honda.com/assets/images/logo/hondacare.svg"
                    alt="Customer Care"
                  />
                </div>
                <div data-v-a0432b50="" className="foot-address">
                  <p style={{fontWeight:"400" }}>
                    PT Astra Honda Motor <br />
                    Jl. Laksda Yos Sudarso - Sunter 1 <br />
                    Jakarta 14350, Indonesia <br />
                    Tel. 0811-9-500-989
                  </p>
                </div>
                <div>
                  <a href="https://sustainability.honda.asia/">
                    <img
                      width="172"
                      height="50"
                      src="https://asset.astra-honda.com/assets/images/logo/blue-skies.svg"
                      alt="Blue Skies"
                    />
                  </a>
                </div>
                <div>
                  <a href="/komik">
                    <img
                      data-v-a0432b50=""
                      width="172"
                      height="50"
                      src="https://asset.astra-honda.com/assets/images/logo/soichiro-honda.svg"
                      alt="Blue Skies"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer
        style={{
          background: "#4f4f4f",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="copyright" style={{ textAlign: "center" }}>
          <p style={{ color: "#888" }}>
            <b style={{ color: "white" }}>
              Privacy
              Policy&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Legal
              Cookie
            </b>
            <br />
            &copy; 2024 Your Company Name. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
