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
              <div className="board-photo">
                <img 
                  src={`${director.url}`}
                  alt={director.name}
                  onError={(e) => {
                    e.target.onerror = null; // prevent infinite loop
                    const initials = director.name
                      .split(' ')
                      .map(n => n[0])
                      .join('')
                      .toUpperCase()
                      .slice(0, 2);
                    
                    // Reliable fallback (via.placeholder.com is down/unstable)
                    e.target.src = `https://placehold.co/300x280/1a3a6c/ffffff?text=${initials}`;
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