import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';

function Products() {
    useEffect(() => {
        // Initialize Swiper
        var swiper = new Swiper('.swiper-container', {
          slidesPerView: 1,
          spaceBetween: 10,
        });
    
        // Clean up Swiper on component unmount
        return () => {
          swiper.destroy();
        };
      }, []);

  return (
    <>
    <section className="container" style={{ paddingBottom: '200px' }}>
      <div className="title">Varian Warna Genio</div>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              src="https://ik.imagekit.io/zlt25mb52fx/ahmcdn/uploads/product-draft/colors/abs-fabulous-green-515x504-tr-4-25072023-093704.png"
              alt="Fabulous Green"
              style={{ width: '70%', height: '70%', objectFit: 'cover' }}
            />
          </div>
          <div className="swiper-slide">
            <img
              src="https://ik.imagekit.io/zlt25mb52fx/ahmcdn/uploads/product-draft/colors/abs-fabulous-blue-515x504-tr-5-25072023-093533.png"
              alt="Fabulous Blue"
              style={{ width: '70%', height: '70%', objectFit: 'cover' }}
            />
          </div>
          <div className="swiper-slide">
            <img
              src="https://ik.imagekit.io/zlt25mb52fx/ahmcdn/uploads/product-draft/colors/abs-fabulous-black-515x504-tr-6-25072023-093543.png"
              alt="Fabulous Black"
              style={{ width: '70%', height: '70%', objectFit: 'cover' }}
            />
          </div>
          <div className="swiper-slide">
            <img
              src="https://ik.imagekit.io/zlt25mb52fx/ahmcdn/uploads/product-draft/colors/cbs-radiant-red-black-515x504-tr-3-25072023-093604.png"
              alt="Radiant Red Black"
              style={{ width: '70%', height: '70%', objectFit: 'cover' }}
            />
          </div>
          <div className="swiper-slide">
            <img
              src="https://ik.imagekit.io/zlt25mb52fx/ahmcdn/uploads/product-draft/colors/cbs-radiant-silver-black-515x504-tr-3-26072023-072534.png"
              alt="Radiant Silver Black"
              style={{ width: '70%', height: '70%', objectFit: 'cover' }}
            />
          </div>
          <div className="swiper-slide">
            <img
              src="https://ik.imagekit.io/zlt25mb52fx/ahmcdn/uploads/product-draft/colors/cbs-radiant-black-515x504-tr-3-25072023-093617.png"
              alt="Radiant Black"
              style={{ width: '70%', height: '70%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Products