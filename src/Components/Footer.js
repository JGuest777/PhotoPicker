import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="mt-2 text-center">
        <small>&copy; Copyright 2020, FotoPikr</small>
        <br />
        <a
          href="https://www.jamesguest.com/"
          target="_blank"
          className="footerLinks"
        >
          Portfolio
        </a>
        <a
          href="https://github.com/JGuest777/PhotoPicker"
          target="_blank"
          className="footerLinks"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/james-guest-014b6568/"
          target="_blank"
          className="footerLinks"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
};

export default Footer;
