import React, { useEffect } from "react";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const stickyDiv = document.getElementById("stickingDiv");
      if (window.pageYOffset > 0) {
        stickyDiv.style.position = "fixed";
        stickyDiv.style.zIndex = 1000;
        stickyDiv.style.top = "0";
        stickyDiv.style.width = "100vw"; // Set width to viewport width
      } else {
        stickyDiv.style.position = "static";
        stickyDiv.style.width = "100%"; // Set width back to 100%
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="container"
      >
        <div>
          <a href="https://www.astra-honda.com/">
            <img
              width="250"
              height="53"
              src="https://ik.imagekit.io/zlt25mb52fx/ahmcdn/assets/images/logo/honda.svg"
              alt="Astra Honda Motor"
            />
          </a>
        </div>
        <nav style={{ display: "flex" }}>
          <div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                gap: "15px",
              }}
            >
              <li>
                <a aria-label="HOME" href="https://www.astra-honda.com/">
                  <span className="menuItem">HOME</span>
                </a>
              </li>
              <li>
                <a
                  aria-label="PRODUCT"
                  href="https://www.astra-honda.com/product"
                >
                  <span className="menuItem">PRODUCT</span>
                </a>
              </li>
              <li>
                <a aria-label="PROMO" href="https://www.astra-honda.com/promo">
                  <span className="menuItem">PROMO</span>
                </a>
              </li>
              <li>
                <a aria-label="DEALER" href="https://rog.asus.com/support/">
                  <span className="menuItem">DEALER</span>
                </a>
              </li>
              <li>
                <a aria-label="AFTER SALES" href="/">
                  <span className="menuItem">AFTER SALES</span>
                </a>
              </li>
              <li>
                <a aria-label="CORPORATE" href="/">
                  <span className="menuItem">CORPORATE</span>
                </a>
              </li>
            </ul>
            <div
              style={{ top: "50px" }}
            ></div>
          </div>
        </nav>
        <div style={{ display: "flex" }}>
          <a
            href="https://www.astra-honda.com/"
            className="logo ahm"
            style={{ marginLeft: "auto" }}
          >
            <img
              width="140"
              height="40"
              src="https://ik.imagekit.io/zlt25mb52fx/ahmcdn/assets/images/logo/ahm.svg"
              alt="Astra Honda Motor"
            />
          </a>
        </div>
      </header>
      <div
        id="stickingDiv"
        style={{
          height: "100px",
          background: "red",
          display: "flex",
          alignItems: "center",
          padding: "0",
        }}
      >
      <div className="heading1 container">Honda Genio Terbaru 2024</div>
      </div>
    </>
  );
}

export default Header;
