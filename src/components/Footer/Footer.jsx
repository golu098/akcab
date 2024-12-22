import React from "react";
import "./Footer.css";

const Footer = () => {
  React.useEffect(() => {
    // Replace feather icons
    if (window.feather) {
      window.feather.replace();
    }
  }, []);

  return (
    <footer className="footer">
      <div className="footer__parralax">
        <div className="footer__parralax-trees"></div>
        <div className="footer__parralax-moto"></div>
        <div className="footer__parralax-secondplan"></div>
        <div className="footer__parralax-premierplan"></div>
        <div className="footer__parralax-voiture"></div>
      </div>
      <div className="container">
        <div className="footer__columns">
          <div className="footer__col">
            <h3 className="footer__col-title">
              <i data-feather="shopping-bag"></i> <span>Test</span>
            </h3>
            <nav className="footer__nav">
              <ul className="footer__nav-list">
                <li className="footer__nav-item">
                  <a href="/home" className="footer__nav-link">
                    Home
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="/about" className="footer__nav-link">
                    About
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="/destination" className="footer__nav-link">
                    Destination
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="/contact" className="footer__nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title">
              <i data-feather="share-2"></i> <span>Follow On</span>
            </h3>
            <nav className="footer__nav">
              <ul className="footer__nav-list">
                <li className="footer__nav-item">
                  <a href="e" className="footer__nav-link">
                    <i data-feather="youtube"></i> <span>Youtube</span>
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="e" className="footer__nav-link">
                    <i data-feather="facebook"></i> <span>Facebook</span>
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="we" className="footer__nav-link">
                    <i data-feather="instagram"></i> <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title">
              <i data-feather="send"></i> <span>Contact</span>
            </h3>
            <nav className="footer__nav">
              <ul className="footer__nav-list">
                <li className="footer__nav-item">
                  <a
                    href="mailto:shivkantkr9934@gmail.com"
                    className="footer__nav-link"
                  >
                    shivkantkr9934@gmail.com
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="footer__copyrights">
          <p>
            Made By{" "}
            <a href="wds" target="_blank" rel="noopener noreferrer">
             @DevEdit
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
