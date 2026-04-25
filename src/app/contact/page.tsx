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
        <div className="about-card map-card" style={{ padding: 0, overflow: "hidden", position: "relative" }}>
          <iframe
            src="https://maps.google.com/maps?q=The%20Moin%20chicken,%20Amadhara,%20Gujarat&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: "invert(90%) hue-rotate(180deg) brightness(0.85) contrast(1.2)",
              position: "absolute",
              top: 0,
              left: 0
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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
              <div className="info-value">
                <a href="tel:+919737919786" style={{ color: "var(--accent)", textDecoration: "none" }}>+91 97379 19786</a>
              </div>
            </div>
            <div className="info-row">
              <div className="info-label">EMAIL</div>
              <div className="info-value">
                <a href="mailto:hello@moinchicken.com" style={{ color: "var(--accent)", textDecoration: "none" }}>hello@moinchicken.com</a>
              </div>
            </div>
            <div className="info-row">
              <div className="info-label">FOLLOW</div>
              <div className="social-icons-contact" style={{ display: 'flex', gap: '15px' }}>
                <a href="https://www.instagram.com/moinchicken" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://www.facebook.com/moinchicken" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
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
