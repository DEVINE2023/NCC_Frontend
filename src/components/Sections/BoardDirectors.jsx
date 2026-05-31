import { DIRECTORS } from '../../data/constants';
import './BoardDirectors.css';

export default function BoardDirectors() {
  return (
    <section className="board">
      <div className="container">
        <h2>Board Of Directors</h2>
        <div className="board-grid">
          {DIRECTORS.map((director, i) => (
            <div key={i} className="board-card">
              {/* Photo Container - Put your photos here */}
              <div className="board-photo">
                <img 
                  src={`/assets/images/directors/${director.name.toLowerCase().replace(/\s+/g, '-')}.jpg`} 
                  alt={director.name}
                  onError={(e) => {
                    e.target.style.display = 'none'; // Hide broken image
                  }}
                />
              </div>
              
              <div className="board-info">
                <h4>{director.name}</h4>
                <span className="role">{director.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}