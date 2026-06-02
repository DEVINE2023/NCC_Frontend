import { useState } from 'react';
import './DSCPurchase.css';

const DSCPurchase = () => {
  const [profile, setProfile] = useState('Government');
  const [classify, setClassify] = useState('Sign');
  const [years, setYears] = useState(2);
  const [hasToken, setHasToken] = useState(true);

  const calculatePrice = () => {
    let basePrice = 0;
    if (classify === 'Sign & Encrypt') {
      basePrice = years === 1 ? 3750 : 5150;
    } else {
      basePrice = years === 1 ? 1800 : 2500;
    }

    const tokenPrice = hasToken ? 0 : 1200;
    const subtotal = basePrice + tokenPrice;
    const vat = Math.round(subtotal * 0.13);
    const total = subtotal + vat;

    return { basePrice, tokenPrice, subtotal, vat, total };
  };

  const price = calculatePrice();

  const getEmoji = (type) => {
    if (type.includes('Government')) return '🏛️';
    if (type.includes('Individual')) return '👤';
    if (type.includes('Organization') || type.includes('EBPS')) return '🏢';
    if (type.includes('Ncell Vendor') || type.includes('DGFT')) return '📋';
    if (type.includes('EBPS')) return '✍️';
    if (type.includes('Manpower')) return '👷';
    if (type.includes('Development') || type.includes('Bank')) return '🏦';
    if (type.includes('Indian Embassy')) return '🌍';
    return '🔹';
  };

  return (
    <div className="dsc-purchase-page">
      <div className="container">
        <div className="page-header">
          <h1>Renew Digital Signature Certificate</h1>
          <p>Secure, Authentic, and Legally Binding Digital Solutions in Nepal</p>
        </div>

        {/* Usage Type Cards */}
        <div className="usage-section">
          <h3>Usage Type</h3>
          <div className="usage-cards">
            {['Individual', 'Government', 'Indian Embassy', 'EBPS', 'Development Banks', 'Ncell Vendors', 'Manpower', 'Vender Bidding'].map((type) => (
              <div
                key={type}
                className={`usage-card ${profile === type ? 'active' : ''}`}
                onClick={() => setProfile(type)}
              >
                <span className="card-icon">{getEmoji(type)}</span>
                <p>{type}</p>
                {profile === type && <span className="check-mark">✓</span>}
              </div>
            ))}
          </div>
        </div>

        {/* CLASSIFY */}
        <div className="classify-section">
          <h3>CLASSIFY</h3>
          <div className="classify-options">
            {['Sign', 'Sign & Encrypt'].map((opt) => (
              <button
                key={opt}
                className={`classify-btn ${classify === opt ? 'active' : ''}`}
                onClick={() => setClassify(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* YEARS */}
        <div className="years-section">
          <h3>YEARS</h3>
          <div className="years-options">
            {[1, 2].map((y) => (
              <button
                key={y}
                className={`year-btn ${years === y ? 'active' : ''}`}
                onClick={() => setYears(y)}
              >
                {y} Years
              </button>
            ))}
          </div>
        </div>

        {/* TOKEN */}
        <div className="token-section">
          <h3>TOKEN</h3>
          <div className="token-options">
            <button 
              className={`token-btn ${!hasToken ? 'active' : ''}`}
              onClick={() => setHasToken(false)}
            >
              Buy USB Token
            </button>
            <button 
              className={`token-btn ${hasToken ? 'active' : ''}`}
              onClick={() => setHasToken(true)}
            >
              I already have a USB Token
            </button>
          </div>
        </div>

        {/* PAYMENT SUMMARY */}
        <div className="payment-summary">
          <h3>Payment Summary</h3>
          <div className="summary-table">
            <div className="row">
              <span>DSC Amount</span>
              <span>NPR {price.basePrice}</span>
            </div>
            {!hasToken && (
              <div className="row">
                <span>USB Token</span>
                <span>NPR {price.tokenPrice}</span>
              </div>
            )}
            <div className="row">
              <span>GST (13%)</span>
              <span>NPR {price.vat}</span>
            </div>
            <div className="row total">
              <strong>Payable Amount</strong>
              <strong>NPR {price.total}</strong>
            </div>
          </div>

          <button className="buy-certificate-btn">
            Buy Certificate - NPR {price.total}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DSCPurchase;