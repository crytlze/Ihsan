import React from 'react';
import "./style.css";
import Images292 from './assets/rectangle-116.png'


function Credit() {
  return (
    <div className="credit">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <p className="jadikan-IHSAN">
            <span className="text-wrapper">“Jadikan </span>
            <span className="span">IHSAN</span>
            <span className="text-wrapper"> sebagai teman baik di perusahaan anda”</span>
          </p>
          <div className="div">Asep Trisna Setiawan (CEO)</div>
          <img className="group" alt="Group" src={Images292} />
        </div>
      </div>
    </div>
  );
}

export default Credit;
