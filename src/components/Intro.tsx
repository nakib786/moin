"use client";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section style={{
      padding: "10rem 0",
      backgroundColor: "#0a0a0a",
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div className="container" style={{ textAlign: "center" }}>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ 
            color: "var(--accent)", 
            letterSpacing: "0.4em", 
            fontSize: "0.9rem",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
            display: "block"
          }}
        >
          Our Story
        </motion.span>
        
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ 
            fontSize: "clamp(2rem, 5vw, 3.5rem)", 
            marginBottom: "3rem",
            maxWidth: "800px",
            margin: "0 auto 3rem"
          }}
        >
          Welcome to a culinary journey like no other.
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ 
            fontSize: "1.1rem", 
            color: "rgba(255,255,255,0.5)",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "2"
          }}
        >
          At Qitchen, we believe that sushi is more than just food—it's an art form. 
          Our master chefs meticulously select the freshest ingredients to create 
          a symphony of flavors that will transport you straight to the heart of Tokyo.
        </motion.p>
      </div>
    </section>
  );
}
