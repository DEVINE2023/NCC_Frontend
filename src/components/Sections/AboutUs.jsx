import Button from '../UI/Button';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <section className="about" id="about-us">
      <div className="container">
        <h2>About Us</h2>
        <p>Nepal Certifying Company (NCC) has been established in 2013 with the initiation of implementation and promotion of Digital Signature Certificates and provide services in the field of digital security. Nepal Certifying Company is the Management Partner/ Registration Authority of Radiant CA.</p>
        <Button variant="outline">Read More</Button>
      </div>
    </section>
  );
}