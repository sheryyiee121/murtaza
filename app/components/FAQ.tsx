"use client";
import React, { useState } from 'react';

const faqsLeft = [
    { question: "How to watch IPTV Service?", answer: "Once you subscribe, you will receive an email with instructions on how to set up the IPTV service on your preferred device." },
    { question: "Do you have problem?", answer: "If you face any issues, our dedicated technical support team is ready to assist you 24/7." },
    { question: "What to do after paying?", answer: "After your payment is processed, check your email for confirmation and setup instructions. It usually takes just a few minutes." },
    { question: "Does This Service (IPTV) Work In My Country?", answer: "Yes, our IPTV service is accessible worldwide. As long as you have a stable internet connection, you can watch it anywhere." },
    { question: "What Kind Of Quality Service We Are Providing?", answer: "We provide SD, HD, 4K, and 8K streaming options across 28,000+ channels depending on your device capability and internet speed." }
];

const faqsRight = [
    { question: "What is our Quality servers?", answer: "We offer top-notch quality servers with 99.99% uptime to ensure a smooth, buffer-free streaming experience." },
    { question: "How long can I have subscription?", answer: "We offer various subscription lengths, ranging from 1 month up to 1 year, depending on the plan you choose." },
    { question: "Do I Need A Satellite For Using IPTV?", answer: "No, you do not need a satellite dish. Our IPTV service is delivered entirely over your internet connection." },
    { question: "What Internet Quality Should I Have?", answer: "We recommend a minimum internet speed of 15 Mbps for viewing standard content, and at least 30 Mbps for HD & 4K streaming." },
    { question: "What Kind Of Devices Do You Support?", answer: "We support a wide range of devices including Amazon Firestick, Smart TVs, Android boxes, Apple devices, MAG boxes, and PCs." }
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

        .faq-guarantee {
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin: 0;
        }
      `}</style>
            <section className="faq-section" id="faq">
                <div className="faq-container">
                    <div className="faq-header">
                        <p className="faq-subtitle">FAQ</p>
                        <h2 className="faq-title">Frequently Ask Questions.</h2>
                    </div>

                    <div className="faq-grid">
                        {/* Left Column */}
                        <div className="faq-col">
                            {faqsLeft.map((faq, index) => (
                                <div key={index} className={`faq-item ${openLeft === index ? 'active' : ''}`}>
                                    <button className="faq-question" onClick={() => toggleLeft(index)}>
                                        {faq.question}
                                        <svg className="faq-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </button>
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Column */}
                        <div className="faq-col">
                            {faqsRight.map((faq, index) => (
                                <div key={index} className={`faq-item ${openRight === index ? 'active' : ''}`}>
                                    <button className="faq-question" onClick={() => toggleRight(index)}>
                                        {faq.question}
                                        <svg className="faq-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </button>
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="faq-footer">
                        <button className="faq-cta-btn">Get Your IPTV Access</button>
                        <p className="faq-guarantee">One Time Payment – Money Back Guarantee</p>
                    </div>
                </div >
            </section >
        </>
    );
}
