import { NEWS } from '../../data/constants';
import './NewsUpdates.css';

export default function NewsUpdates() {
  return (
    <section className="news">
      <div className="container">
        <h2>Latest Updates</h2>
        <div className="news-grid">
          {NEWS.map((n, i) => (
            <article key={i} className="news-card">
              <div className="news-meta">
                <time>{n.date}</time>
                {n.loc && <span className="loc">{n.loc}</span>}
                {n.tag && <span className="tag">{n.tag}</span>}
              </div>
              <h3>{n.title}</h3>
              <p>{n.excerpt}</p>
              <button className="read-more">Read More →</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}