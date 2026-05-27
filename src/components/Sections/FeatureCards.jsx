import { FEATURES } from '../../data/constants';
import './FeatureCards.css';

export default function FeatureCards() {
  return (
    <section className="features">
      <div className="container">
        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <div key={i} className="feature-card">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}