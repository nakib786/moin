"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const dishes = [
  { name: "Nigiri Selection", price: "$24", image: "/images/dish-1.png", desc: "Chef's daily choice of fresh seasonal fish." },
  { name: "Spicy Tuna Roll", price: "$18", image: "/images/dish-2.png", desc: "A perfect balance of heat and fresh tuna." },
  { name: "Dragon Roll", price: "$22", image: "/images/dish-3.png", desc: "Unagi and cucumber topped with avocado." },
];

export default function MenuPreview() {
  return (
    <section style={{ padding: "10rem 0", backgroundColor: "#000" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "5rem" }}>
          <div>
            <h2 style={{ fontSize: "3rem", color: "#fff" }}>Signature Dishes</h2>
            <p style={{ color: "rgba(255,255,255,0.5)", marginTop: "1rem" }}>A taste of our most beloved creations.</p>
          </div>
          <button style={{ 
            background: "transparent", 
            border: "1px solid rgba(255,255,255,0.2)", 
            color: "#fff", 
            padding: "0.8rem 2rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontSize: "0.8rem",
            cursor: "pointer"
          }}>
            View Full Menu
          </button>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "3rem" 
        }}>
          {dishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{
                backgroundColor: "var(--card-bg)",
                padding: "2rem",
                borderRadius: "0px",
                textAlign: "left",
                borderBottom: "2px solid transparent",
                transition: "border-color 0.3s ease"
              }}
              whileHover={{ borderBottomColor: "var(--accent)" }}
            >
              <div style={{ 
                position: "relative", 
                height: "300px", 
                width: "100%", 
                marginBottom: "2rem",
                overflow: "hidden"
              }}>
                <Image 
                  src={dish.image} 
                  alt={dish.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <h3 style={{ fontSize: "1.5rem", color: "#fff" }}>{dish.name}</h3>
                <span style={{ color: "var(--accent)", fontWeight: "bold" }}>{dish.price}</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.4)", marginTop: "1rem", fontSize: "0.9rem" }}>{dish.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
