import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container footer-sec">
        <div className="copy-right-sec d-flex justify-content-between">
          <p className="copy-right">&copy; 2025 Veeramanikandan. All Rights Reserved.
</p>
          <div>
            {/* Social Media Logos */}
            <Link to={`https://linkedin.com/company/brandx-esp`} target={"_blank"}>
              <img className="social-logo"
              src="https://res.cloudinary.com/dpcfyn3si/image/upload/v1706617641/Wabeler/ulntztj0icjfivajoctb.png"
              alt="social-logo" />
              </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;