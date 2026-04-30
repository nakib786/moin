"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Navbar from "./Navbar";

export default function SplitLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);
  const gold = "#E2D9C8";

  // Determine active title and image based on path
  const getPageData = () => {
    switch (pathname) {
      case "/": return { title: "MAMNA SENSATION", image: "/images/mamna.jpg" };
      case "/menu": return { title: "MENU", image: "/images/Menu.jpg" };
      case "/about": return { title: "ABOUT", image: "/images/About us.avif" };
      case "/contact": return { title: "GET IN TOUCH", image: "/images/contactus.jpg" };
      default: return { title: "", image: "/images/mamna.jpg" };
    }
  };

  const { title, image } = getPageData();

  // Handle scroll forwarding from left to right
  const handleWheel = (e: React.WheelEvent) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop += e.deltaY;
    }
  };

  const isHome = pathname === "/";

  return (
    <div className={`split-container ${isHome ? "split-75" : "split-50"}`}>
      <div className="grain-overlay" />
      <Navbar />

      {/* Left Panel - Fixed Visuals */}
      <div 
        className="left-panel"
        onWheel={handleWheel}
      >
        <div className="card-glow"></div>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="left-panel-image-container"
          >
            <Image
              src={image}
              alt="Visual anchor"
              fill
              className="split-visual-image"
              priority
              quality={75}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 50vw"
            />
            <div className="left-panel-overlay" />
          </motion.div>
        </AnimatePresence>

        <motion.div 
          key={title}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="page-title-left"
          style={{ 
            fontSize: isHome 
              ? "clamp(4rem, 11vw, 13rem)" 
              : "clamp(2.5rem, 7vw, 6.5rem)",
            lineHeight: 0.8
          }}
        >
          {title === "MAMNA SENSATION" ? (
            <>MAMNA <br /> SENSATION</>
          ) : title}
        </motion.div>

        {/* Social Links */}
        <div className="left-panel-cutout card-cutout">
          <div className="social-links">
            <a href="https://www.facebook.com/moinchicken" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://www.instagram.com/moinchicken" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Right Panel - Scrollable Content */}
      <div 
        className="right-panel"
        ref={scrollRef}
      >
        <AnimatePresence 
          mode="wait"
          onExitComplete={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            if (scrollRef.current) scrollRef.current.scrollTop = 0;
          }}
        >
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ width: "100%", height: "100%" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
