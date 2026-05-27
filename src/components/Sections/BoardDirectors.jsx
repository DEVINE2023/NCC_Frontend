import { DIRECTORS } from '../../data/constants';
import './BoardDirectors.css';

export default function BoardDirectors() {
  return (
    <section className="board">
      <div className="container">
        <h2>Board Of Directors</h2>
        <div className="board-grid">
          {DIRECTORS.map((d, i) => (
            <div key={i} className="board-card">
              <h4>{d.name}</h4>
              <span className="role">{d.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}