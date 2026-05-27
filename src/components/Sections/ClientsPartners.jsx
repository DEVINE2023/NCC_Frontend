import './ClientsPartners.css';

export default function ClientsPartners() {
  return (
    <section className="clients">
      <div className="container">
        <div className="client-block">
          <h2>Our Clients</h2>
          <div className="logo-strip">
            {[1,2,3,4,5].map(i => <div key={i} className="logo-box">Client {i}</div>)}
          </div>
        </div>
        <div className="client-block">
          <h2>Our Partners</h2>
          <div className="logo-strip">
            {[1,2,3,4].map(i => <div key={i} className="logo-box">Partner {i}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}