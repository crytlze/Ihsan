import React from 'react';
import "./style.css";
import IhsanLogo from './assets/ihsan-1.png'
import Image1 from './assets/rectangle-116.png'
import Image2 from './assets/group-290.png'
import Image3 from './assets/vector.png'


function Greeting() {
  return (
    <div className="landing-page">
    <div className="div">
      <div className="navbar">
        <div className="overlap">
          <div className="text-wrapper">IHSAN</div>
          <div className="text-wrapper-2">Home</div>
        </div>
        <div className="text-wrapper-3">Services</div>
        <div className="text-wrapper-4">Pricing</div>
        <div className="text-wrapper-5">Mitra</div>
        <div className="text-wrapper-6">Contact</div>
        <div className="frame">
          <div className="text-wrapper-7">Login</div>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-8">Contact</div>
        </div>
        <img className="IHSAN" alt="Ihsan" src={IhsanLogo} />


      </div>
      <div className="overlap-group">
        <div className="overlap-2">
          <p className="solusi-terdepan">
            Solusi Terdepan,
            <br />
            untuk Manajemen Perusahaan Modern.
          </p>
          <p className="kami-percaya-bahwa">
            <span className="span">
              Kami percaya bahwa efisiensi adalah kunci sukses perusahaan. Oleh karena itu, dengan bangga kami
              mempersembahkan produk{" "}
            </span>
            <span className="text-wrapper-9">IHSAN </span>
          </p>
          <div className="group">
            <div className="overlap-group-2">
              <div className="ellipse" />
              <div className="ellipse-2" />
              <div className="ellipse-3" />
              <img className="img" alt="Group" src= {Image2}/>
            </div>
          </div>
        </div>
        <div className="frame-2">
          <img className="vector" alt="Vector" src={Image3} />
          <div className="text-wrapper-7">Mari Bicara</div>
        </div>
      </div>
      <img className="group-2" alt="Group" src={Image1} />
    </div>
  </div>
  );
}

export default Greeting;
