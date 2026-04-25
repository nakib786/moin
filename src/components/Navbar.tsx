"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const gold = "#E2D9C8";
  
  const menuItems = [
    { name: "HOME", href: "/" },
    { name: "MENU", href: "/menu" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT US", href: "/contact" },
  ];

  const HalalSign = () => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", opacity: 1 }}>
      <img 
        src="/images/Halal_logo.svg" 
        alt="Halal Certified" 
        style={{ width: "80px", height: "auto" }}
      />
    </div>
  );

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="navbar-container"
      >
        <div className="nav-inner">
          <div 
            className="menu-icon-box" 
            onClick={() => setIsOpen(true)}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = gold;
              e.currentTarget.style.background = "rgba(226, 217, 200, 0.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.background = "transparent";
            }}
            style={{
              width: "40px",
              height: "40px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: gold,
              cursor: "pointer",
              transition: "all 0.3s ease",
              marginLeft: "4px"
            }}
          >
            <svg width="16" height="10" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H18" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M0 6H12" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M0 11H18" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
          </div>

          <Link href="/" className="brand-text" style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.6rem",
            letterSpacing: "0.05em",
            color: gold,
            textDecoration: "none",
            marginLeft: "16px",
            marginRight: "32px",
            lineHeight: 1,
            fontWeight: "400"
          }}>
            THE MOIN CHICKEN
          </Link>
          
          <div className="nav-links" style={{
            display: "flex",
            gap: "24px",
            alignItems: "center",
            marginRight: "32px"
          }}>
            <Link href="/menu" style={{
              fontSize: "14px",
              letterSpacing: "0.12em",
              fontWeight: 600,
              color: gold,
              textDecoration: "none",
              opacity: 0.8,
              padding: "8px 16px",
              borderRadius: "100px",
              border: "1px solid transparent",
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => (e.currentTarget.style.borderColor = gold)}
            onMouseOut={(e) => (e.currentTarget.style.borderColor = "transparent")}
            >MENU</Link>
            <Link href="/about" style={{
              fontSize: "14px",
              letterSpacing: "0.12em",
              fontWeight: 600,
              color: gold,
              textDecoration: "none",
              opacity: 0.8,
              padding: "8px 16px",
              borderRadius: "100px",
              border: "1px solid transparent",
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => (e.currentTarget.style.borderColor = gold)}
            onMouseOut={(e) => (e.currentTarget.style.borderColor = "transparent")}
            >ABOUT</Link>
          </div>

          <Link href="tel:+919904796786" className="call-btn-mobile" style={{
            border: "1px solid rgba(255, 255, 255, 0.15)",
            padding: "0 22px",
            height: "42px",
            borderRadius: "100px",
            fontSize: "13px",
            letterSpacing: "0.1em",
            fontWeight: 600,
            color: gold,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
            whiteSpace: "nowrap",
            marginRight: "4px"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = gold;
            e.currentTarget.style.background = "rgba(226, 217, 200, 0.05)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
            e.currentTarget.style.background = "transparent";
          }}
          >
            CALL US
          </Link>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="menu-modal-overlay"
          >
            <div className="menu-split-container">
              {/* Left Panel: Links & Info */}
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="menu-links-panel"
              >
                {/* Close Button */}
                <motion.div 
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    position: "absolute",
                    top: "40px",
                    left: "40px",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: gold,
                    background: "rgba(255, 255, 255, 0.02)",
                    zIndex: 10
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 4.5L13.5 13.5M4.5 13.5L13.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </motion.div>

                <div style={{ marginBottom: "60px" }}>
                  <HalalSign />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {menuItems.map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
                    >
                      <Link 
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                          color: gold,
                          textDecoration: "none",
                          letterSpacing: "-0.02em",
                          lineHeight: 1.1,
                          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                          display: "inline-block"
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.color = "#fff";
                          e.currentTarget.style.transform = "translateX(15px)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.color = gold;
                          e.currentTarget.style.transform = "translateX(0)";
                        }}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="menu-info-footer">
                  <div className="info-item">
                    <h4>LOCATION</h4>
                    <p>AMADHARA, GUJARAT</p>
                    <a 
                      href="https://maps.google.com/maps?q=The%20Moin%20chicken,%20Amadhara,%20Gujarat" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        marginTop: "8px",
                        fontSize: "11px",
                        color: gold,
                        textDecoration: "none",
                        letterSpacing: "0.1em",
                        opacity: 0.8,
                        borderBottom: `1px solid ${gold}`
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                      GET DIRECTIONS
                    </a>
                  </div>
                  <div className="info-item">
                    <h4>CONTACT</h4>
                    <a href="tel:+919737919786" style={{ color: gold, textDecoration: "none", fontFamily: "var(--font-serif)", fontSize: "1.1rem" }}>
                      +91 97379 19786
                    </a>
                  </div>
                  <div className="info-item" style={{ opacity: 0.6 }}>
                    <h4>SOCIALS</h4>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <a href="https://www.instagram.com/moinchicken" target="_blank" rel="noopener noreferrer" style={{ color: gold, textDecoration: "none" }}>INSTAGRAM</a>
                      <span>/</span>
                      <a href="https://www.facebook.com/moinchicken" target="_blank" rel="noopener noreferrer" style={{ color: gold, textDecoration: "none" }}>FB</a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Panel: Visual */}
              <motion.div 
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="menu-image-panel"
              >
                <img 
                  src="/images/mamna.jpg" 
                  alt="Menu Preview" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div className="menu-image-overlay" />
                
                <div style={{
                  position: "absolute",
                  bottom: "60px",
                  left: "60px",
                  color: "#fff",
                  zIndex: 10
                }}>
                  <p style={{ 
                    fontSize: "12px", 
                    letterSpacing: "0.2em", 
                    marginBottom: "10px",
                    opacity: 0.6,
                    textTransform: "uppercase"
                  }}>Savor the moment</p>
                  <h2 style={{ 
                    fontSize: "clamp(2rem, 4vw, 3.5rem)", 
                    letterSpacing: "0.02em",
                    lineHeight: 1
                  }}>EXPERIENCE <br /> THE MOIN</h2>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

