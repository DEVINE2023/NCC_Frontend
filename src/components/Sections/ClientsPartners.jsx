import { useState, useEffect } from 'react';
import './ClientsPartners.css';

const clients = [
  { id: 1, name: 'Client 1', logo: '/assets/images/clients/client1.jpeg' },
  { id: 2, name: 'Client 2', logo: '/assets/images/clients/client2.jpeg' },
  { id: 3, name: 'Client 3', logo: '/assets/images/clients/client3.jpeg' },
  { id: 4, name: 'Client 4', logo: '/assets/images/clients/client4.jpeg' },
  { id: 5, name: 'Client 5', logo: '/assets/images/clients/client5.jpeg' },
  { id: 6, name: 'Client 6', logo: '/assets/images/clients/client6.jpeg' },
  { id: 7, name: 'Client 7', logo: '/assets/images/clients/client7.jpeg' },
];

const partners = [
  { id: 1, name: 'Partner 1', logo: '/assets/images/partners/partner1.jpeg' },
  { id: 2, name: 'Partner 2', logo: '/assets/images/partners/partner2.jpeg' },
];

export default function ClientsPartners() {
  return (
    <section className="clients-partners-section">
      <div className="container">

        {/* Clients Auto-Scroll Section */}
        <div className="auto-scroll-container">
          <h2 className="section-title">Our Clients</h2>
          <div className="auto-scroll-wrapper">
            <div className="auto-scroll-track">

              {/* Duplicate the logos for seamless infinite scroll */}
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div key={`${client.id}-${index}`} className="scroll-item">
                  <div className="logo-wrapper">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="scroll-logo"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/300x150?text=${client.name}`;
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners Auto-Scroll Section */}
        <div className="auto-scroll-container partners-section">
          <h2 className="section-title">Our Partners</h2>
          <div className="auto-scroll-wrapper">
            <div className="auto-scroll-track">
              {/* Duplicate the logos for seamless infinite scroll */}
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <div key={`${partner.id}-${index}`} className="scroll-item">
                  <div className="logo-wrapper">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="scroll-logo"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/300x150?text=${partner.name}`;
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}