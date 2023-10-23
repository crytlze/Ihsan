import React from 'react';
import Image from './a.png'
import Grup297 from  './assets/297.png'

function Login() {
  return (
    <div className="login">
    <div className="overlap-wrapper">
      <div className="overlap">
        <div className="overlap-group">
          <img className="group" alt="Group" src="group-318.png" />
          <div className="ellipse" />
          <div className="div" />
          <div className="overlap-group-wrapper">
            <div className="overlap-2">
              <div className="overlap-3">
                <div className="text-wrapper">IHSAN</div>
                <img className="IHSAN" alt="Ihsan" src="IHSAN-1.png" />
              </div>
              <p className="selamat-datang">
                <span className="span">
                  Selamat Datang,
                  <br />
                </span>
                <span className="text-wrapper-2">Masukan akun untuk melanjutkan ke </span>
                <span className="text-wrapper-3">IHSAN</span>
                <span className="text-wrapper-2">.</span>
              </p>
              <div className="text-wrapper-4">Login</div>
              <div className="div-wrapper">
                <div className="overlap-group-2">
                  <div className="text-wrapper-5">E-mail</div>
                  <div className="rectangle" />
                  <img className="vector" alt="Vector" src="vector.svg" />
                </div>
              </div>
              <div className="group-2">
                <div className="overlap-4">
                  <div className="text-wrapper-6">Password</div>
                  <div className="rectangle" />
                  <img className="img" alt="Vector" src="image.svg" />
                </div>
                <div className="text-wrapper-7">*Lupa Password</div>
              </div>
              <div className="frame">
                <div className="text-wrapper-8">Login</div>
              </div>
              <p className="belum-punya-akun">
                <span className="text-wrapper-9">Belum punya akun ?</span>
                <span className="text-wrapper-10">&nbsp;</span>
                <span className="text-wrapper-11">Registrasi Disini!</span>
              </p>
            </div>
          </div>
          <img className="group-3" alt="Group" src="group-292.png" />
        </div>
        <img className="group-4" alt="Group" src={Grup297} />
      </div>
    </div>
  </div>
  );
}

export default Login;
