"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const MENU_CATEGORIES = [
  { id: "MAKI", label: "MAKI" },
  { id: "URAMAKI", label: "URAMAKI" },
  { id: "SPECIAL", label: "SPECIAL ROLLS" },
];

const MENU_ITEMS = {
  MAKI: [
    {
      name: "SPICY TUNA MAKI",
      price: "$5",
      desc: "A tantalizing blend of spicy tuna, cucumber, and avocado, harmoniously rolled in nori and seasoned rice.",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1000&auto=format&fit=crop"
    },
    {
      name: "SALMON AVOCADO",
      price: "$6",
      desc: "Fresh Atlantic salmon paired with creamy avocado and a hint of wasabi.",
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1000&auto=format&fit=crop"
    }
  ],
  URAMAKI: [
    {
      name: "CALIFORNIA ROLL",
      price: "$7",
      desc: "Crab meat, cucumber, and avocado with a sprinkle of toasted sesame seeds.",
      image: "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?q=80&w=1000&auto=format&fit=crop"
    }
  ],
  SPECIAL: [
    {
      name: "DRAGON ROLL",
      price: "$12",
      desc: "Shrimp tempura and cucumber topped with avocado slices and eel sauce.",
      image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=1000&auto=format&fit=crop"
    }
  ]
};

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("MAKI");
  const gold = "#E2D9C8";

  return (
    <div className="menu-container-new">
      {/* Category Tabs */}
      <div className="menu-tabs">
        {MENU_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`menu-tab-btn ${activeTab === cat.id ? "active" : ""}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="menu-content-card">
        <div className="card-header" style={{ marginBottom: "40px" }}>
          <span>◇</span>
          <h2>{activeTab}</h2>
          <span>◇</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="menu-items-list"
          >
            {MENU_ITEMS[activeTab as keyof typeof MENU_ITEMS].map((item, idx) => (
              <div key={item.name} className="menu-item-premium">
                <div className="menu-item-image-box">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    style={{ objectFit: "cover" }}
                    unoptimized 
                  />
                </div>
                
                <div className="menu-item-header">
                  <h3>{item.name}</h3>
                  <div className="price-leader" />
                  <span className="price">{item.price}</span>
                </div>
                
                <p className="menu-item-desc">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx>{`
        .menu-container-new {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          min-height: 100%;
        }

        .menu-tabs {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .menu-tab-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.5);
          padding: 10px 20px;
          border-radius: 10px;
          font-size: 10px;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .menu-tab-btn.active {
          background: rgba(226, 217, 200, 0.1);
          border-color: #E2D9C8;
          color: #E2D9C8;
        }

        .menu-content-card {
          background: #0a0a0a;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 30px;
          padding: 40px 20px;
          flex: 1;
        }

        .menu-items-list {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .menu-item-premium {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .menu-item-image-box {
          position: relative;
          width: 100%;
          height: 250px;
          border-radius: 20px;
          overflow: hidden;
          background: #111;
        }

        .menu-item-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 10px;
        }

        .menu-item-header h3 {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          color: #E2D9C8;
          white-space: nowrap;
        }

        .price-leader {
          flex: 1;
          border-bottom: 1px dotted rgba(255, 255, 255, 0.2);
          margin-bottom: 5px;
        }

        .price {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          color: #fff;
        }

        .menu-item-desc {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.9rem;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}
