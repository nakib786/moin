"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section style={{
      position: "relative",
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      backgroundColor: "#000"
    }}>
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0
        }}
      >
        <Image 
          src="/images/hero-bg.png" 
          alt="Sushi background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </motion.div>

      {/* Content Overlay */}
      <div style={{ zIndex: 10, textAlign: "center" }}>
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="hero-text"
          style={{ color: "#fff" }}
        >
          Sushi <br /> Sensation
        </motion.h1>
        
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          style={{ 
            fontSize: "1.2rem", 
            letterSpacing: "0.1em", 
            marginBottom: "3rem",
            maxWidth: "600px",
            margin: "0 auto 3rem",
            color: "rgba(255,255,255,0.7)"
          }}
        >
          Discover the exquisite art of Japanese cuisine, where tradition meets modern culinary excellence.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <button className="button-primary">Book a Table</button>
        </motion.div>
      </div>

      {/* Decorative Sushi Element */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        style={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: "300px",
          height: "300px",
          zIndex: 5,
          opacity: 0.8
        }}
      >
        <Image 
          src="/images/sushi-1.png" 
          alt="Floating Sushi"
          width={300}
          height={300}
          style={{ objectFit: "contain" }}
        />
      </motion.div>
    </section>
  );
}
