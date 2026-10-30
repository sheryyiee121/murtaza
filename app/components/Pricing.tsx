import React from 'react';

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: '£19',
    duration: '1 Month Subscription',
    features: [
      'HD/4K playback, if supported by the stream and device',
      '2 Devices',
      'Firestick Compatible'
    ],
    buttonText: 'Subscribe Now'
  },
  {
    id: 'standard',
    name: 'Standard',
    price: '£49',
    duration: '6 Months Subscription',
    highlighted: true,
    features: [
      'HD/4K playback, if supported by the stream and device',
      '3 Devices',
      'Fire TV Stick and compatible devices'
    ],
    buttonText: 'Subscribe Now'
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '£69',
    duration: '1 Year Subscription',
    features: [
      'HD/4K playback, if supported by the stream and device',
      '5 Devices',
      'Fire TV Stick and compatible devices',
      'Priority Support'
    ],
    buttonText: 'Subscribe Now'
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    price: '£89',
    duration: '1 Year Subscription',
    features: [
      'HD/4K playback, if supported by the stream and device',
      'Confirm device limits with the provider',
      'Fire TV Stick and compatible devices',
      'VOD availability depends on plan'
    ],
    buttonText: 'Go Ultimate'
  }
];

export default function Pricing() {
  return (
    <div>
      <style>{`
        .pricing-section {
          background-color: #000;
          padding: 80px 24px;
          font-family: var(--font-geist-sans), sans-serif;
          position: relative;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
          align-items: stretch;
        }

        .pricing-heading {
          max-width: 760px;
          margin: 0 auto 40px;
          text-align: center;
        }

        .pricing-heading h2 {
          color: #fff;
          font-size: clamp(28px, 4vw, 42px);
          margin: 0 0 12px;
        }

        .pricing-heading p {
          color: #aaa;
          line-height: 1.6;
          margin: 0;
        }

        .pricing-card {
          background-color: #080808;
          border: 1px solid #1a1a1a;
          border-radius: 16px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .pricing-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }

        .pricing-card.highlighted {
          border-color: #00d2ff;
          box-shadow: 0 0 30px rgba(0, 210, 255, 0.1);
        }

        .pricing-card.highlighted:hover {
          box-shadow: 0 10px 40px rgba(0, 210, 255, 0.2);
        }

        .card-badge {
          position: absolute;
          top: -12px;
          left: 24px;
          background-color: #00d2ff;
          color: #000;
          font-size: 10px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .card-icon {
          width: 32px;
          height: 32px;
          background: #111;
          border: 1px solid #222;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          color: #666;
        }

        .highlighted .card-icon {
          color: #00d2ff;
        }

        .card-title {
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          margin: 0 0 8px 0;
        }

        .card-price {
          font-size: 42px;
          font-weight: 800;
          color: #fff;
          margin: 0 0 4px 0;
          line-height: 1;
        }

        .highlighted .card-price {
          color: #00d2ff;
        }

        .card-duration {
          font-size: 12px;
          color: #666;
          margin: 0 0 24px 0;
        }

        .card-features {
          list-style: none;
          padding: 0;
          margin: 0 0 32px 0;
          flex-grow: 1;
        }

        .card-features li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          color: #ccc;
          margin-bottom: 12px;
        }

        .check-icon {
          color: #333;
          font-size: 14px;
        }

        .highlighted .check-icon {
          color: #00d2ff;
        }

        .card-note {
          font-size: 11px;
          color: #00d2ff;
          margin: 0 0 16px 0;
          font-weight: 600;
        }

        .card-btn {
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 700;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
          border: 1px solid #222;
          background: transparent;
          color: #fff;
          text-decoration: none;
          display: block;
        }

        .card-btn:hover {
          background: #111;
          border-color: #333;
        }

        .highlighted .card-btn {
          background: #00d2ff;
          color: #000;
          border: none;
        }

        .highlighted .card-btn:hover {
          background: #00b0d9;
          box-shadow: 0 0 16px rgba(0, 210, 255, 0.4);
        }

        .pricing-footer {
          text-align: center;
          margin-top: 60px;
          font-size: 13px;
          color: #555;
        }
        .pricing-footer span {
          color: #aaa;
        }
          
        @media (max-width: 768px) {
          .pricing-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <section className="pricing-section" id="pricing">
        <div className="pricing-heading">
          <h2>Firestick IPTV Plans</h2>
          <p>Compare the advertised durations and prices. Confirm device limits, content availability, and renewal and refund terms with the provider.</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div key={plan.id} className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}>
              <div className="card-icon">
                {plan.id === 'basic' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 22h20M4 22V6l6 6 2-10 2 10 6-6v16" />
                  </svg>
                )}
                {plan.id === 'standard' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M2 12h20" />
                  </svg>
                )}
                {plan.id === 'premium' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15 10 23 10 17 15 19 23 12 18 5 23 7 15 1 10 9 10" />
                  </svg>
                )}
                {plan.id === 'ultimate' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15 10 23 10 17 15 19 23 12 18 5 23 7 15 1 10 9 10" />
                  </svg>
                )}
              </div>

              <h3 className="card-title">{plan.name}</h3>
              <div className="card-price">{plan.price}</div>
              <p className="card-duration">{plan.duration}</p>

              <ul className="card-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/447393653591?text=Hello,%20I%20want%20to%20buy%20the%20${plan.name}%20plan`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-btn"
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>

        <div className="pricing-footer">
          Check device support and content availability with the provider before subscribing.
        </div>
      </section >
    </div >
  );
}
