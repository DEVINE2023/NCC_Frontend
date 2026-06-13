import { VIDEOS } from '../../data/constants';
import './VideoSection.css';

// Improved helper function to convert normal YouTube links to "Embed" links
const getEmbedUrl = (url) => {
  if (!url || url.includes("PASTE") || url.trim() === '') return '';

  try {
    // Handle youtu.be short links
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1].split(/[?&]/)[0];
      return `https://www.youtube.com/embed/${id}`;
    }

    // Handle standard youtube.com/watch?v= links
    if (url.includes('youtube.com/watch')) {
      const urlParams = new URLSearchParams(url.split('?')[1]);
      const id = urlParams.get('v');
      if (id) {
        return `https://www.youtube.com/embed/${id}`;
      }
    }

    // Handle youtube.com/embed/ links (already in embed format)
    if (url.includes('youtube.com/embed/')) {
      return url;
    }

    // Fallback: try to extract video ID from any format
    const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11}).*/);
    if (match) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }

    return url;
  } catch (error) {
    console.error('Error parsing YouTube URL:', error);
    return '';
  }
};

export default function VideoSection() {
  return (
    <section className="videos">
      <div className="container">
        <h2>Video Tutorials</h2>
        <div className="videos-grid">
          {VIDEOS.map((v, i) => {
            const embedUrl = getEmbedUrl(v.url);

            return (
              <div key={i} className="video-card">
                {/* Video player with improved attributes */}
                {embedUrl ? (
                  <div className="video-wrapper">
                    <iframe
                      src={embedUrl}
                      title={v.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="video-iframe"
                      loading="lazy"
                    ></iframe>
                  </div>
                ) : (
                  <div className="video-placeholder">
                    <p>Video unavailable</p>
                  </div>
                )}

                <div className="video-info">
                  <h4>{v.title}</h4>
                  <span className="channel">{v.channel}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}