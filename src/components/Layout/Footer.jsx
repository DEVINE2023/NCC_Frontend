import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>NCC</h3>
            <p>Nepal Certifying Company (NCC) Pvt. Ltd is the Management Partner of the Issuing Certifying Authority. We provide Digital Signature Certificates and Information Security services.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <address>
              <p>Kathmandu, Nepal</p>
              <p><a href="mailto:support@cert.com.np">support@cert.com.np</a></p>
              <p>+977 9802300374</p>
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Nepal Certifying Company Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}