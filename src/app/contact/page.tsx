"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactPage() {
  const openingHours = [
    { day: "Mon", time: "11:00 - 22:30" },
    { day: "Tue", time: "11:00 - 22:30" },
    { day: "Wed", time: "11:00 - 22:30" },
    { day: "Thu", time: "CLOSED" },
    { day: "Fri", time: "11:00 - 22:30" },
    { day: "Sat & Sun", time: "11:00 - 22:30" },
  ];

  return (
    <div className="contact-grid">
      <div className="contact-main-grid">
        {/* Section 1: Opening Hours */}
        <div className="about-card opening-card">
          <div className="card-header">
            <span>◇</span>
            <h2>OPENING</h2>
            <span>◇</span>
          </div>
          <div className="hours-list">
            {openingHours.map((item) => (
              <div key={item.day} className="hour-row">
                <span className="day">{item.day}</span>
                <div className="row-dots" />
                <span className="time" style={{ color: item.time === "CLOSED" ? "#ff4444" : "var(--accent)" }}>
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Gallery Grid */}
        <div className="gallery-card">
          <div className="gallery-item">
            <Image src="/images/mamna.jpg" alt="Gallery 1" fill style={{ objectFit: "cover" }} unoptimized />
          </div>
          <div className="gallery-item">
            <Image src="/images/Menu.jpg" alt="Gallery 2" fill style={{ objectFit: "cover" }} unoptimized />
          </div>
          <div className="gallery-item">
            <Image src="/images/contactus.jpg" alt="Gallery 3" fill style={{ objectFit: "cover" }} unoptimized />
          </div>
          <div className="gallery-item">
            <Image src="/images/mamna.jpg" alt="Gallery 4" fill style={{ objectFit: "cover" }} unoptimized />
          </div>
        </div>

        {/* Section 3: Map */}
        <div className="about-card map-card">
          <Image
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop"
            alt="Amadhara Map"
            fill
            style={{ objectFit: "cover", filter: "invert(90%) hue-rotate(180deg) brightness(0.5) contrast(1.2)" }}
            unoptimized
          />
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "var(--accent)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span style={{ fontSize: "10px", marginTop: "5px", letterSpacing: "0.1em", background: "rgba(0,0,0,0.8)", padding: "2px 8px", borderRadius: "4px" }}>AMADHARA</span>
          </div>
        </div>

        {/* Section 4: Contact Info */}
        <div className="about-card contact-info-card">
          <div className="card-header">
            <span>◇</span>
            <h2>CONTACT</h2>
            <span>◇</span>
          </div>
          <div className="info-grid">
            <div className="info-row">
              <div className="info-label">ADDRESS</div>
              <div className="info-value">Amadhara, Gujarat <br/> Navsari 396560</div>
            </div>
            <div className="info-row">
              <div className="info-label">PHONE</div>
              <div className="info-value">+91 97379 19786</div>
            </div>
            <div className="info-row">
              <div className="info-label">EMAIL</div>
              <div className="info-value">hello@moin.com</div>
            </div>
            <div className="info-row">
              <div className="info-label">FOLLOW</div>
              <div className="social-icons-contact" style={{ display: 'flex', gap: '15px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Footer */}
      <div className="about-footer">
        <div className="footer-links">
          <span style={{ color: "var(--accent)", opacity: 0.8 }}>© THE MOIN CHICKEN</span>
          <span style={{ fontSize: "7px", opacity: 0.3 }}>◆</span>
          <span>AMADHARA</span>
        </div>
        <div className="footer-links">
          <span>PRIVACY</span>
          <span style={{ fontSize: "7px", opacity: 0.3 }}>◆</span>
          <span>TERMS</span>
          <span style={{ fontSize: "7px", opacity: 0.3 }}>◆</span>
          <span style={{ opacity: 0.8 }}>2026</span>
        </div>
      </div>
    </div>
  );
}
