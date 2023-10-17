import React from 'react';
import Image from './a.png'
import Image304 from './assets/304.png'
import Call from './assets/vector.png'
import IhsanLogo from './assets/ihsan-1.png'
import FBLogo from './assets/uiw-facebook.png'

function AboutUs() {
  return (
     <div className="about-us">
        <div className="div">
        <div className="overlap-group">
          <div className="overlap">
            <p className="text-wrapper">Kami menyambut Anda untuk bergabung dalam kemitraan</p>
            <p className="text-wrapper">Kami menyambut Anda untuk bergabung dalam kemitraan</p>
          </div>
          <div className="overlap-2">
            <p className="p">
              Jadilah mitra kami dalam mewujudkan kebaikan untuk semua, mulai dengan Konsultasi Pada CS yang ramah
            </p>
            <img className="vector" alt="Vector" src="image.svg" />
          </div>
          <img className="group" alt="Group" src={Image304} />
          <div className="frame">
            <img className="img" alt="Vector" src= {Call}/>
            <div className="text-wrapper-2">Kontak Admin</div>
          </div>
          <div className="text-wrapper-3">IHSAN</div>
          <div className="text-wrapper-4">www.ihsan.ppti.id</div>
          <p className="member-of-PPTIK-ITB">
            <span className="span">Member of </span>
            <span className="text-wrapper-5">PPTIK ITB Group</span>
          </p>
          <p className="office-of-service">
            <span className="span">Office of Service and Program Development </span>
            <span className="text-wrapper-5">PT.LSKK</span>
          </p>
          <p className="element-floor-gd-litbang">
            4th Floor, Gd. Litbang Integrasi dan Aplikasi (PAU) <br />
            Jl. Tamansari No.126, Bandung 40132, Indonesia
          </p>
          <p className="text-wrapper-6">
            Jl. Pelajar Pejuang 45 No.65,Lkr. Sel.,Lengkong,Kota Bandung,Jawa Barat 40263
          </p>
          <p className="telepon">
            <span className="span">Telepon : 022-7302571</span>
            <span className="text-wrapper-5"> /</span>
            <span className="span">
              {" "}
              022-73516650
              <br />
              WhatsApp : 0812-1455-8336
              <br />
              Email : pt.lskk@gmasil.com
            </span>
          </p>
          <img className="IHSAN" alt="Ihsan" src={IhsanLogo} />
          <div className="text-wrapper-7">Tautan Berguna</div>
          <div className="text-wrapper-8">Services</div>
          <div className="text-wrapper-9">Back To Top</div>
          <div className="text-wrapper-10">Projects</div>
          <div className="text-wrapper-11">Blog</div>
          <div className="text-wrapper-12">Pricing</div>
          <div className="text-wrapper-13">Contact</div>
          <div className="text-wrapper-14">Login</div>
          <img className="uiw-facebook" alt="Uiw facebook" src= {FBLogo} />
        </div>
        <p className="copyright-PT">
          <span className="text-wrapper-15">Copyright </span>
          <span className="text-wrapper-16">© </span>
          <span className="text-wrapper-17">2023 PT.Langgeng Sejahtera Kreasi Komputasi - CSI</span>
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
