import React from 'react';
import Image from './a.png'

import LSKK2 from './assets/LSKK-PNG-2.png'
import LogoITB from './assets/logo-ITB.png'
import PPTIK from './assets/f.png'
import BinaryRemoveBG2 from './assets/binari-removebg-preview.png'
import UBL from './assets/ubl.png'


function Partner() {
  return (
    <div className="partner">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">LSKK</div>
          <img className="LSKK-PNG" alt="Lskk PNG" src={LSKK2}/>
          <img className="vector" alt="" src="vector-32.svg" />
        </div>
        <div className="overlap-group">
          <img className="logo-ITB" alt="Logo ITB" src={LogoITB} />
        </div>
        <div className="logo-ITB-wrapper">
          <img className="logo-ITB" alt="Logo ITB" src={LogoITB} />
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-2">PPTIK ITB</div>
          <img className="f" alt="F" src={PPTIK}/>
          <img className="img" alt="" src="vector-34.svg" />
        </div>
        <div className="overlap-group-2">
          <div className="text-wrapper-3">BINARI</div>
          <img className="binari-removebg" alt="Binari removebg" src= {BinaryRemoveBG2} />
          <img className="vector-2" alt="" src="vector-35.svg" />
        </div>
        <div className="overlap-3">
          <div className="text-wrapper-3">BINARI</div>
          <img className="binari-removebg" alt="Binari removebg" src= {BinaryRemoveBG2} />
          <img className="vector-2" alt="" src="vector-36.svg" />
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-4">PPTIK ID</div>
          <div className="vector-wrapper">
            <img className="vector-3" alt="" src="vector-33.svg" />
          </div>
        </div>
        <div className="logo-ubl-removebg-wrapper">
          <img className="logo-ubl-removebg" alt="Logo ubl removebg" src= {UBL} />
        </div>
        <div className="img-wrapper">
          <img className="logo-ubl-removebg" alt="Logo ubl removebg" src= {UBL} />
        </div>
        <div className="text-wrapper-5">Mitra Kami</div>
        <p className="p">
          Kemitraan kami dibangun di atas saling percaya, integritas, dan visi yang sama untuk mencapai keunggulan
          bersama.
        </p>
        <img className="vector-4" alt="" src="vector.svg" />
        <img className="vector-5" alt="" src="image.svg" />
      </div>
    </div>
  );
}

export default Partner;
