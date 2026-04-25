"use client";

import { motion } from "framer-motion";

const MENU_DATA = [
  {
    category: "STARTERS",
    items: [
      { name: "Crispy Okra Fries", price: "₹220", desc: "Thinly sliced okra tossed with chaat masala and lime." },
      { name: "Gunpowder Calamari", price: "₹350", desc: "Crispy calamari dusted with spicy podi powder." },
      { name: "Samosa Chaat", price: "₹250", desc: "Deconstructed vegetable samosa with yogurt, tamarind, and mint chutneys." }
    ]
  },
  {
    category: "SIGNATURES",
    items: [
      { name: "MAMNA SPECIAL CHICKEN", price: "₹450", desc: "Our signature tender chicken with secret spices." },
      { name: "Smoked Butter Chicken", price: "₹480", desc: "Classic murgh makhani, infused with applewood smoke." },
      { name: "Lamb Rogan Josh", price: "₹550", desc: "Slow-braised lamb in a deeply aromatic Kashmiri chili gravy." }
    ]
  },
  {
    category: "TRADITIONAL GRILL",
    items: [
      { name: "Tandoori Jhinga", price: "₹650", desc: "Jumbo prawns marinated in ajwain and saffron, char-grilled." },
      { name: "Malai Broccoli", price: "₹380", desc: "Cream-cheese and cardamom marinated broccoli florets." },
      { name: "Mutton Seekh", price: "₹520", desc: "Spiced minced mutton skewers, fired in the tandoor." }
    ]
  },
  {
    category: "DESSERTS & DRINKS",
    items: [
      { name: "Saffron Rasmalai", price: "₹280", desc: "Soft cottage cheese dumplings soaked in saffron milk." },
      { name: "Mango Lassi", price: "₹180", desc: "Thick, sweet yogurt cooler blended with Alphonso mango." },
      { name: "Rosemary Lemonade", price: "₹150", desc: "Fresh lemonade with a hint of rosemary and black salt." }
    ]
  }
];

export default function MenuPage() {
  const gold = "#E2D9C8";

  return (
    <div className="menu-page-content">
      <div className="menu-header">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          OUR MENU
        </motion.h2>
        <motion.div 
          className="menu-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>

      <div className="menu-list">
        {MENU_DATA.map((section, sIdx) => (
          <motion.div 
            key={section.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: sIdx * 0.1, duration: 0.5 }}
            className="menu-category"
          >
            <h3 className="category-title">
              <span>◇</span> {section.category} <span>◇</span>
            </h3>
            
            <div className="category-items">
              {section.items.map((item, iIdx) => (
                <div key={item.name} className="menu-item-row">
                  <div className="menu-item-info">
                    <div className="menu-item-header-row">
                      <h4 className="item-name">{item.name}</h4>
                      <div className="price-dots" />
                      <span className="item-price">{item.price}</span>
                    </div>
                    <p className="item-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .menu-page-content {
          padding: 60px 40px;
          min-height: 100%;
          color: #fff;
          max-width: 800px;
          margin: 0 auto;
        }

        .menu-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .menu-header h2 {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          color: ${gold};
          letter-spacing: 0.1em;
          margin-bottom: 20px;
        }

        .menu-divider {
          height: 1px;
          width: 60px;
          background: ${gold};
          margin: 0 auto;
          transform-origin: center;
        }

        .menu-list {
          display: flex;
          flex-direction: column;
          gap: 60px;
          padding-bottom: 60px;
        }

        .category-title {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          color: ${gold};
          text-align: center;
          margin-bottom: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          letter-spacing: 0.1em;
        }

        .category-title span {
          font-size: 0.8rem;
          color: rgba(226, 217, 200, 0.5);
        }

        .category-items {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .menu-item-row {
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease;
        }
        
        .menu-item-row:hover {
          transform: translateX(5px);
        }

        .menu-item-header-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 8px;
        }

        .item-name {
          font-family: var(--font-sans);
          font-size: 1.1rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          color: #fff;
          white-space: nowrap;
          transition: color 0.3s ease;
        }
        
        .menu-item-row:hover .item-name {
          color: ${gold};
        }

        .price-dots {
          flex: 1;
          border-bottom: 1px dotted rgba(255, 255, 255, 0.2);
          margin: 0 15px;
          position: relative;
          top: -4px;
        }

        .item-price {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          color: ${gold};
        }

        .item-desc {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          line-height: 1.5;
          font-weight: 300;
        }

        @media (max-width: 768px) {
          .menu-page-content {
            padding: 40px 20px;
          }
          
          .item-name {
            font-size: 1rem;
            white-space: normal;
            margin-right: 10px;
          }
          
          .price-dots {
            min-width: 20px;
          }
        }
      `}</style>
    </div>
  );
}
