import React from 'react';
import "./style.css";
import Image1 from './assets/aa.png'
import V26 from './assets/v26.png'





function Product() {
  return (
    <div className="product">
    <div className="div">
      <div className="text-wrapper">Absensi</div>
      <div className="text-wrapper-2">01</div>
      <p className="p">
        Tidak perlu lagi repot dengan catatan absensi manual yang memakan waktu. Ihsan hadir dengan sistem absensi
        otomatis yang dapat diakses dengan mudah oleh seluruh karyawan Anda. Melalui fitur modern dan inovatif kami,
        Anda dapat melacak kehadiran, absen, cuti, dan izin dengan cepat dan efisien
      </p>
      <div className="overlap">
        <div className="text-wrapper-3">LAYANAN KAMI</div>
        <p className="text-wrapper-4">Rekomendasi Layanan untuk Kebutuhan Perusahaan Anda.</p>
      </div>
      <img className="vector" alt="Vector" src= {V26}/>

      <div className="group">
        <div className="overlap-group">
          <img className="rectangle" alt="" src="rectangle-143.svg" />
          <img className="img" alt="" src="rectangle-142.svg" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <img className="vector-2" alt="" src="vector-42.svg" />
          <img className="group-2" alt="" src={Image1} />
        </div>
      </div>
    </div>
  </div>

  );
}

export default Product;
