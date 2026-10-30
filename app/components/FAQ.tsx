"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const faqsLeft = [
    { question: "How do I set up an IPTV app?", answer: "Check the setup guide for general instructions, then follow the official instructions for your device and chosen service." },
    { question: "How can I get support?", answer: "Contact the provider using the WhatsApp link on this site and include your device model and a description of the issue." },
    { question: "What happens after I subscribe?", answer: "Check the provider's confirmation and setup instructions, and contact support if they do not arrive." },
    { question: "Is the service available in my country?", answer: "Availability, app access, and content rights can vary by country. Confirm regional availability with the provider before subscribing." },
    { question: "What picture quality is available?", answer: "Picture quality depends on the plan, source stream, device, display, and internet connection. Check the current plan details." }
];

const faqsRight = [
    { question: "How reliable is the service?", answer: "Streaming reliability can vary with the service, network, device, and time of day. Ask the provider for current service information before subscribing." },
    { question: "What subscription lengths are available?", answer: "The pricing page lists the currently advertised plan durations. Review the renewal and cancellation terms with the provider before paying." },
    { question: "Do I need a satellite dish?", answer: "IPTV is delivered over an internet connection, so a satellite dish is not required for IPTV itself. You need a compatible device and app." },
    { question: "What internet speed do I need?", answer: "Requirements vary by stream quality and simultaneous use. Check the service's recommendations and your device's network requirements." },
    { question: "Which devices are supported?", answer: "Compatibility varies by app, model, and plan. Check the setup guide and confirm your exact device with the provider." }
];

export default function FAQ() {
    const [openLeft, setOpenLeft] = useState<number | null>(null);
    const [openRight, setOpenRight] = useState<number | null>(null);

    const toggleLeft = (index: number) => {
        setOpenLeft(openLeft === index ? null : index);
    };

    const toggleRight = (index: number) => {
        setOpenRight(openRight === index ? null : index);
    };

    return (
        <>
            <style>{`
        .faq-section {
          background-color: #000;
          padding: 100px 24px;
          font-family: var(--font-geist-sans), sans-serif;
        }

        .faq-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .faq-subtitle {
          color: #00d2ff;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin: 0 0 12px 0;
        }

        .faq-title {
          font-size: clamp(32px, 5vw, 42px);
          font-weight: 800;
          color: #fff;
          margin: 0;
          letter-spacing: -0.5px;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 60px;
        }

        @media (max-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr;
          }
        }

        .faq-item {
          background-color: transparent;
          border: 1px solid #222;
          border-radius: 6px;
          margin-bottom: 12px;
          overflow: hidden;
          transition: border-color 0.2s;
        }

        .faq-item:hover, .faq-item.active {
          border-color: #444;
        }

        .faq-question {
          width: 100%;
          text-align: left;
          background: transparent;
          border: none;
          padding: 20px;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-geist-sans), sans-serif;
        }

        .faq-icon {
          color: #fff;
          transition: transform 0.3s ease;
        }

        .faq-item.active .faq-icon {
          transform: rotate(180deg);
        }

        .faq-answer {
          padding: 0 20px;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
          background-color: #080808;
        }

        .faq-item.active .faq-answer {
          max-height: 200px;
          padding: 0 20px 20px 20px;
        }
          
        .faq-answer p {
          margin: 0;
          color: #aaa;
          font-size: 14px;
          line-height: 1.6;
        }

        .faq-footer {
          text-align: center;
        }

        .faq-cta-btn {
          background-color: #00d2ff;
          color: #000;
          border: none;
          padding: 14px 40px;
          border-radius: 99px;
          font-size: 14px;
          font-weight: 800;
          text-transform: uppercase;
          cursor: pointer;
          transition: background-color 0.2s, transform 0.15s;
          margin-bottom: 20px;
        }

        .faq-cta-btn:hover {
          background-color: #00b0d9;
          transform: translateY(-2px);
        }

      `}</style>
            <section className="faq-section" id="faq">
                <div className="faq-container">
                    <div className="faq-header">
                        <p className="faq-subtitle">FAQ</p>
                        <h2 className="faq-title">Frequently Asked Questions</h2>
                    </div>

                    <div className="faq-grid">
                        {/* Left Column */}
                        <div className="faq-col">
                            {faqsLeft.map((faq, index) => (
                                <div key={index} className={`faq-item ${openLeft === index ? 'active' : ''}`}>
                                    <button
                                        className="faq-question"
                                        type="button"
                                        aria-expanded={openLeft === index}
                                        aria-controls={`faq-left-${index}`}
                                        onClick={() => toggleLeft(index)}
                                    >
                                        {faq.question}
                                        <svg className="faq-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </button>
                                    <div className="faq-answer" id={`faq-left-${index}`} aria-hidden={openLeft !== index}>
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Column */}
                        <div className="faq-col">
                            {faqsRight.map((faq, index) => (
                                <div key={index} className={`faq-item ${openRight === index ? 'active' : ''}`}>
                                    <button
                                        className="faq-question"
                                        type="button"
                                        aria-expanded={openRight === index}
                                        aria-controls={`faq-right-${index}`}
                                        onClick={() => toggleRight(index)}
                                    >
                                        {faq.question}
                                        <svg className="faq-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </button>
                                    <div className="faq-answer" id={`faq-right-${index}`} aria-hidden={openRight !== index}>
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="faq-footer">
                        <Link className="faq-cta-btn" href="/pricing">View plan details</Link>
                    </div>
                </div >
            </section >
        </>
    );
}
