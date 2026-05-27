import Button from '../UI/Button';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Digital Signature Certificates in Nepal</h2>
        <p>Secure, Authentic, and Legally Binding Digital Solutions</p>
        <div className="hero-actions">
          <Button variant="primary">Get Certificate</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
    </section>
  );
}