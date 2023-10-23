import React, { Component } from 'react';
import '../assets/css/page.css'
import image from "../assets/f.png"
import { Link } from 'react-router-dom';

class Toolbar extends Component {
  render() {
    return (
      <div className="toolbar">
        <div className="auto-group-9rc8-7ui">
          <div className="rectangle-29-qKv">
            Konten atau elemen lain di dalam komponen
          </div>
          <a href="/App.jsx" className="ihsan-yBE">IHSAN</a>

          <p className="solusi-terdepan-untuk-manajemen-perusahaan-modern-5zx">
            Solusi Terdepan,
            <br />
            untuk Manajemen Perusahaan Modern.
          </p>
          <p className="home-zs2">Home</p>
          <p className="services-69N">Services</p>
          <p className="kami-percaya-bahwa-efisiensi-adalah-kunci-sukses-perusahaan-oleh-karena-itu-dengan-bangga-kami-mempersembahkan-produk-ihsan-yDA">
            <span className="kami-percaya-bahwa-efisiensi-adalah-kunci-sukses-perusahaan-oleh-karena-itu-dengan-bangga-kami-mempersembahkan-produk-ihsan-yDA-sub-0">
              Kami percaya bahwa efisiensi adalah kunci sukses perusahaan. Oleh karena itu, dengan bangga kami mempersembahkan produk
            </span>
            <span className="kami-percaya-bahwa-efisiensi-adalah-kunci-sukses-perusahaan-oleh-karena-itu-dengan-bangga-kami-mempersembahkan-produk-ihsan-yDA-sub-1">
              IHSAN
            </span>
          </p>
          <p className="pricing-moE">Pricing</p>
          <p className="mitra-fdi">Mitra</p>
          <p className="contact-Ppc">Contact</p>
          <button className="frame-13-vZe" style={{ textDecoration: 'none' }}>
            <a href="Login.html" style={{ textDecoration: 'none', color: 'inherit' }}>
           Login
         </a>
          </button>

          <a href="landing-page.html" className="frame-15-Ait">
            Contact
          </a>
          <div className="frame-14-BP6">
            <img className="vector-h6Y" src={image} />
            <p className="mari-bicara-17E">Mari Bicara</p>
          </div>
          <img className="ihsan-1-Vo6" src="./assets/ihsan-1-P7N.png" />
          <img className="group-290-Ekg" src="./assets/group-290.png" />
          <div className="rectangle-118-9se"></div>
          <p className="jadikan-ihsan-sebagai-teman-baik-di-perusahaan-anda-u68">
            <span className="jadikan-ihsan-sebagai-teman-baik-di-perusahaan-anda-u68-sub-0">“Jadikan </span>
            <span className="jadikan-ihsan-sebagai-teman-baik-di-perusahaan-anda-u68-sub-1">IHSAN</span>
            <span className="jadikan-ihsan-sebagai-teman-baik-di-perusahaan-anda-u68-sub-2"> sebagai teman baik di perusahaan anda”</span>
          </p>
          <p className="asep-trisna-setiawan-ceo-9Pn">Asep Trisna Setiawan (CEO)</p>
          <div className="group-292-Fxc">
            <img className="rectangle-117-ydi" src="./assets/rectangle-117.png" />
            <img className="rectangle-116-KxU" src="./assets/rectangle-116-Axx.png" />
          </div>
          <div className="group-305-UqN">
            <img className="popup-1-PBe" src="./assets/popup-1.png" />
            <p className="chat-me-uQt">Chat Me!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Toolbar;
