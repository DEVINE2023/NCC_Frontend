import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import './Hero.css';

export default function Hero() {
  const navigate = useNavigate();

  const handleRenewClick = () => {
    navigate('/renew-dsc');
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Digital Signature Certificates in Nepal</h2>
        <p>Secure, Authentic, and Legally Binding Digital Solutions</p>
        <div className="hero-actions">
          <Button 
            variant="primary" 
            onClick={handleRenewClick}
          >
            Renew your DSC
          </Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
    </section>
  );
}