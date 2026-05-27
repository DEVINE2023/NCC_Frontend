import { CERT_CLASSES } from '../../data/constants';
import './CertificateClasses.css';

export default function CertificateClasses() {
  return (
    <section className="cert-classes" id="certificates">
      <div className="container">
        <h2>Certificate Classes</h2>
        <div className="classes-grid">
          {CERT_CLASSES.map((c, i) => (
            <div key={i} className="class-card">
              <h3>{c.cls}</h3>
              <div className="class-meta">
                <p><strong>Assurance:</strong> {c.assurance}</p>
                <p><strong>Application:</strong> {c.app}</p>
              </div>
              <p className="class-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}