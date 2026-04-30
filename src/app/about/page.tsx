"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function AboutPage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);

  const heroImages = ["/images/mamna.jpg", "/images/Menu.jpg", "/images/contactus.jpg"];
  const storyImages = ["/images/Menu.jpg", "/images/mamna.jpg", "/images/contactus.jpg"];

  const nextHero = () => setHeroIndex((prev) => (prev + 1) % heroImages.length);
  const nextStory = () => setStoryIndex((prev) => (prev + 1) % storyImages.length);

  return (
    <div className="about-grid">
      {/* Header Card */}
      <div className="about-card header-card">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          AMADHARA CHICKEN <br /> ARTISTRY REDEFINED
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Where Amadhara culinary heritage meets modern bold flavors. Indulge in the finest chicken creations, 
          expertly crafted with hand-picked spices to elevate your dining journey at The Moin.
        </motion.p>
      </div>

      {/* Main Slideshow Card */}
      <div className="about-card about-image-card">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ width: "100%", height: "100%", position: "relative" }}
          >
            <Image
              src={heroImages[heroIndex]}
              alt="Chicken Artistry"
              fill
              style={{ objectFit: "cover" }}
              quality={75}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.1)" }} />
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation Arrow */}
        <motion.div 
          onClick={nextHero}
          whileHover={{ scale: 1.1, background: "rgba(255,255,255,0.2)" }}
          whileTap={{ scale: 0.9 }}
          style={{ 
            position: "absolute", 
            right: "30px", 
            top: "50%", 
            transform: "translateY(-50%)",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            cursor: "pointer",
            zIndex: 10,
            border: "1px solid rgba(255,255,255,0.1)"
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </motion.div>
      </div>

      {/* Awards Section */}
      <div className="awards-grid">
        <div className="about-card award-card">
          <div className="stars">★★★★★</div>
          <h3>LOCAL FAVORITE</h3>
          <p>BEST CHICKEN SENSATION</p>
        </div>
        <div className="about-card award-card">
          <div className="stars">★★★★★</div>
          <h3>FOODIE GUIDE</h3>
          <p>AUTHENTICITY AWARD</p>
        </div>
        <div className="about-card award-card">
          <div className="stars">★★★★★</div>
          <h3>TOP RATED</h3>
          <p>QUALITY & TASTE</p>
        </div>
      </div>

      {/* Story Slideshow Section */}
      <div className="story-grid">
        <div className="story-image">
          <AnimatePresence mode="wait">
            <motion.div
              key={storyIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <Image
                src={storyImages[storyIndex]}
                alt="Our Story"
                fill
                style={{ objectFit: "cover" }}
                quality={75}
                sizes="(max-width: 768px) 100vw, 30vw"
              />
            </motion.div>
          </AnimatePresence>
          
           {/* Navigation Arrow */}
          <motion.div 
            onClick={nextStory}
            whileHover={{ scale: 1.1, background: "rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.9 }}
            style={{ 
              position: "absolute", 
              right: "20px", 
              bottom: "20px",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              cursor: "pointer",
              zIndex: 10,
              border: "1px solid rgba(255,255,255,0.1)"
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </motion.div>
        </div>
        <div className="about-card story-text-card">
          <div className="story-header">
            <span>◇</span>
            <h2>OUR STORY</h2>
            <span>◇</span>
          </div>
          <p>
            Founded with a passion for bold flavors, The Moin's journey began in the heart of Amadhara with a secret family recipe 
            and a vision to redefine chicken artistry. Over years, it has transformed into a sanctuary 
            for food lovers, celebrated for its unique spice blends and unwavering commitment to quality 
            and devotion to redefining gastronomy.
          </p>
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
