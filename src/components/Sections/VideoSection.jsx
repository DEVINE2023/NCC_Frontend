import { VIDEOS } from '../../data/constants';
import './VideoSection.css';

// Helper function to convert normal YouTube links to "Embed" links
const getEmbedUrl = (url) => {
  if (!url || url.includes("PASTE")) return ''; // Returns blank if you forgot to paste the link
  if (url.includes('youtu.be/')) {
    const id = url.split('youtu.be/')[1].split('?')[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  if (url.includes('v=')) {
    const id = url.split('v=')[1].split('&')[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  return url;
};

export default function VideoSection() {
  return (
    <section className="videos">
      <div className="container">
        <h2>Video Tutorials</h2>
        <div className="videos-grid">
          {VIDEOS.map((v, i) => (
            <div key={i} className="video-card">
              {/* 👇 This is the actual video player 👇 */}
              <iframe
                src={getEmbedUrl(v.url)}
                title={v.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video-iframe"
              ></iframe>
              
              <div className="video-info">
                <h4>{v.title}</h4>
                <span className="channel">{v.channel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}