import React from 'react';
import camera from '../Images/camera.png';

const Header = () => {
  return (
    <header className="mt-3 text-center">
      <img src={camera} alt="camera" />
      <h1 id="logo">FotoPikr</h1>
    </header>
  );
};

export default Header;
