import React from 'react';
import Image from './a.png'

function ImageDisplay() {
  return (
    <div>
      <h1>Gambar Sederhana</h1>
      <img src={Image} alt="Deskripsi Gambar" />
    </div>
  );
}

export default ImageDisplay;
