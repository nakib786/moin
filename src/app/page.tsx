"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CARDS = [
  { id: "menu", title: "MENU", image: "/images/Menu.jpg", href: "/menu" },
  { id: "about", title: "ABOUT US", image: "/images/About us.avif", position: "center", href: "/about" },
  { id: "contact", title: "CONTACT US", image: "/images/contactus.jpg", position: "center 75%", href: "/contact" },
];

export default function Dashboard() {
  return (
    <div className="card-grid">
      {CARDS.map((card, idx) => (
        <Link key={card.id} href={card.href} style={{ textDecoration: "none", flex: 1, display: "flex" }}>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.15 }}
            className="home-card"
            style={{ width: "100%" }}
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              style={{ objectFit: "cover", objectPosition: (card as any).position || "center" }}
              quality={75}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="card-glow"></div>
            <div className="card-overlay">
              <div className="card-cutout">
                <h3 className="card-title">
                  {card.title}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </h3>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
