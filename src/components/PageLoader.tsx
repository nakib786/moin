"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Ornamental SVG ring ─────────────────────────────────── */
function OrnamentalRing() {
  return (
    <svg
      width="300"
      height="300"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", pointerEvents: "none" }}
    >
      {/* Outer slow-rotating dashed ring */}
      <motion.circle
        cx="150" cy="150" r="138"
        stroke="rgba(226,217,200,0.18)"
        strokeWidth="0.8"
        strokeDasharray="4 14"
        strokeLinecap="round"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{ originX: "150px", originY: "150px" }}
      />
      {/* Inner counter-rotating dashed ring */}
      <motion.circle
        cx="150" cy="150" r="122"
        stroke="rgba(226,217,200,0.10)"
        strokeWidth="0.6"
        strokeDasharray="2 18"
        strokeLinecap="round"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ originX: "150px", originY: "150px" }}
      />
      {/* Static thin ring */}
      <circle cx="150" cy="150" r="108" stroke="rgba(226,217,200,0.06)" strokeWidth="0.5" />

      {/* Four cardinal diamond markers */}
      {[0, 90, 180, 270].map((deg) => {
        const r = 138;
        const rad = (deg * Math.PI) / 180;
        const x = 150 + r * Math.cos(rad - Math.PI / 2);
        const y = 150 + r * Math.sin(rad - Math.PI / 2);
        return (
          <motion.rect
            key={deg}
            x={x - 2.5} y={y - 2.5}
            width="5" height="5"
            fill="rgba(226,217,200,0.55)"
            transform={`rotate(45, ${x}, ${y})`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: deg / 360 }}
          />
        );
      })}

      {/* Slow arc highlight that sweeps around the outer ring */}
      <motion.circle
        cx="150" cy="150" r="138"
        stroke="url(#arcGold)"
        strokeWidth="1.5"
        strokeDasharray="60 810"
        strokeLinecap="round"
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        style={{ originX: "150px", originY: "150px" }}
      />
      <defs>
        <linearGradient id="arcGold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E2D9C8" stopOpacity="0" />
          <stop offset="50%" stopColor="#E2D9C8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#E2D9C8" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─── Horizontal crest lines ─────────────────────────────── */
function CrestLine({ delay = 0, width = 60 }: { delay?: number; width?: number }) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        width,
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(226,217,200,0.6), transparent)",
        transformOrigin: "center",
      }}
    />
  );
}

/* ─── Shimmer text overlay ───────────────────────────────── */
const shimmerKeyframes = `
@keyframes shimmer {
  0%   { background-position: -400px 0; }
  100% { background-position:  400px 0; }
}
@keyframes loader-grain {
  0%, 100% { transform: translate(0,0); }
  25%       { transform: translate(-1%, 1%); }
  50%       { transform: translate(1%, -1%); }
  75%       { transform: translate(-1%, -1%); }
}
`;

/* ─── Main component ─────────────────────────────────────── */
export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [pct, setPct]         = useState(0);
  const rafRef                = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let current = 0;
    const step = () => {
      current += Math.random() * 14 + 4;
      if (current >= 100) {
        setPct(100);
        setTimeout(() => setVisible(false), 420);
      } else {
        setPct(current);
        rafRef.current = setTimeout(step, 70 + Math.random() * 70);
      }
    };
    const t = setTimeout(step, 180);
    return () => {
      clearTimeout(t);
      if (rafRef.current) clearTimeout(rafRef.current);
    };
  }, []);

  const clamped = Math.min(pct, 100);

  return (
    <>
      {/* Inject keyframes once */}
      <style>{shimmerKeyframes}</style>

      <AnimatePresence>
        {visible && (
          <motion.div
            id="page-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              /* Deep layered dark-gold background */
              background:
                "radial-gradient(ellipse 70% 55% at 50% 42%, #1a140a 0%, #0c0a06 45%, #060504 100%)",
            }}
          >
            {/* ── Grain texture ── */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: "-20%",
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
                backgroundSize: "180px 180px",
                opacity: 0.035,
                animation: "loader-grain 0.4s steps(1) infinite",
                pointerEvents: "none",
              }}
            />

            {/* ── Radial glow bloom ── */}
            <motion.div
              aria-hidden
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              style={{
                position: "absolute",
                width: "600px",
                height: "600px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(226,195,120,0.07) 0%, rgba(226,180,80,0.03) 35%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* ── Vignette corners ── */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.75) 100%)",
                pointerEvents: "none",
              }}
            />

            {/* ══════════════════════════════════════
                          MAIN CARD
            ══════════════════════════════════════ */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0,
                zIndex: 1,
              }}
            >
              {/* Ornamental ring lives behind everything in the card */}
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-54%)" }}>
                <OrnamentalRing />
              </div>

              {/* ── TOP ORNAMENT ── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}
              >
                <CrestLine delay={0.5} width={52} />
                <span style={{ fontSize: "8px", color: "rgba(226,217,200,0.5)", letterSpacing: "0.3em" }}>◆</span>
                <CrestLine delay={0.5} width={52} />
              </motion.div>

              {/* ── EYEBROW TEXT ── */}
              <motion.p
                initial={{ opacity: 0, letterSpacing: "0.6em" }}
                animate={{ opacity: 0.4, letterSpacing: "0.35em" }}
                transition={{ delay: 0.55, duration: 1.0 }}
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "8px",
                  fontWeight: 600,
                  color: "#E2D9C8",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                Est. Amadhara, Gujarat
              </motion.p>

              {/* ── MAIN TITLE ── */}
              <div style={{ position: "relative", textAlign: "center" }}>
                {/* Gold shimmer sweep across the text */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                      "linear-gradient(105deg, transparent 35%, rgba(255,230,160,0.22) 50%, transparent 65%)",
                    backgroundSize: "400px 100%",
                    backgroundRepeat: "no-repeat",
                    animation: "shimmer 2.8s ease-in-out infinite",
                    pointerEvents: "none",
                    zIndex: 2,
                  }}
                />
                <motion.h1
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
                  style={{
                    fontFamily: "var(--font-forum), serif",
                    fontWeight: 400,
                    fontSize: "clamp(3rem, 8vw, 5.2rem)",
                    lineHeight: 0.92,
                    letterSpacing: "0.04em",
                    color: "#E2D9C8",
                    textTransform: "uppercase",
                    position: "relative",
                    zIndex: 1,
                    /* Subtle text gradient for extra depth */
                    backgroundImage:
                      "linear-gradient(180deg, #f0e8d4 0%, #c9bc9e 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  The Moin
                </motion.h1>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    height: "1px",
                    background:
                      "linear-gradient(90deg, transparent, rgba(226,217,200,0.5) 30%, rgba(226,217,200,0.5) 70%, transparent)",
                    margin: "10px auto",
                    width: "100%",
                    transformOrigin: "center",
                  }}
                />

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.65 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(0.55rem, 1.8vw, 0.75rem)",
                    letterSpacing: "0.55em",
                    color: "#E2D9C8",
                    textTransform: "uppercase",
                  }}
                >
                  Chicken
                </motion.p>
              </div>

              {/* ── BOTTOM ORNAMENT ── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px" }}
              >
                <CrestLine delay={0.7} width={28} />
                <span style={{ fontSize: "6px", color: "rgba(226,217,200,0.35)", letterSpacing: "0.3em" }}>◆</span>
                <CrestLine delay={0.7} width={52} />
                <span style={{ fontSize: "6px", color: "rgba(226,217,200,0.35)", letterSpacing: "0.3em" }}>◆</span>
                <CrestLine delay={0.7} width={28} />
              </motion.div>

              {/* ── PROGRESS BAR ── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                style={{ marginTop: "44px", width: "220px" }}
              >
                {/* Track */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "1px",
                    background: "rgba(226,217,200,0.1)",
                    borderRadius: "2px",
                    overflow: "visible",
                  }}
                >
                  {/* Fill */}
                  <div
                    style={{
                      height: "100%",
                      width: `${clamped}%`,
                      background:
                        "linear-gradient(90deg, rgba(226,217,200,0.3), #E2D9C8 80%, #fff 100%)",
                      borderRadius: "2px",
                      transition: "width 0.12s ease-out",
                      position: "relative",
                    }}
                  >
                    {/* Glowing tip */}
                    <div
                      style={{
                        position: "absolute",
                        right: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "#fff",
                        boxShadow: "0 0 6px 2px rgba(226,217,200,0.7)",
                      }}
                    />
                  </div>
                </div>

                {/* Label */}
                <div
                  style={{
                    marginTop: "12px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "8px",
                      letterSpacing: "0.25em",
                      color: "rgba(226,217,200,0.3)",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 500,
                      textTransform: "uppercase",
                    }}
                  >
                    Loading
                  </span>
                  <span
                    style={{
                      fontSize: "9px",
                      letterSpacing: "0.1em",
                      color: "rgba(226,217,200,0.5)",
                      fontFamily: "var(--font-forum), serif",
                    }}
                  >
                    {Math.floor(clamped)}%
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* ── HALAL BADGE (bottom-center) ── */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 0.28, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              style={{
                position: "absolute",
                bottom: "32px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div style={{ width: "30px", height: "1px", background: "rgba(226,217,200,0.35)" }} />
              <img
                src="/images/Halal_logo.svg"
                alt="Halal Certified"
                style={{ width: "28px", height: "auto", opacity: 0.6 }}
              />
              <span
                style={{
                  fontSize: "8px",
                  letterSpacing: "0.28em",
                  color: "#E2D9C8",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 500,
                }}
              >
                HALAL CERTIFIED
              </span>
              <div style={{ width: "30px", height: "1px", background: "rgba(226,217,200,0.35)" }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
