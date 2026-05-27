import { VIDEOS } from '../../data/constants';
import './VideoSection.css';

export default function VideoSection() {
  return (
    <section className="videos">
      <div className="container">
        <h2>Video Tutorials</h2>
        <div className="videos-grid">
          {VIDEOS.map((v, i) => (
            <div key={i} className="video-card">
              <div className="video-thumb"><span className="play">▶</span></div>
              <h4>{v.title}</h4>
              <span className="channel">{v.channel}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}