import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import "./MedicalBackground.css";

const PAGE_CONFIG = {
  home: {
    className: "medical-bg-home",
    symbols: ["+", "✚", "•", "○"],
  },

  about: {
    className: "medical-bg-about",
    symbols: ["+", "✚", "○", "•"],
  },

  services: {
    className: "medical-bg-services",
    symbols: ["+", "◉", "•", "✚"],
  },

  courses: {
    className: "medical-bg-courses",
    symbols: ["+", "◇", "•", "○"],
  },

  solutions: {
    className: "medical-bg-solutions",
    symbols: ["+", "◉", "◇", "•"],
  },

  careers: {
    className: "medical-bg-careers",
    symbols: ["+", "♡", "•", "○"],
  },
};

function getPageType(pathname) {
  const path = pathname.toLowerCase();

  if (path === "/" || path === "/home") {
    return "home";
  }

  if (path.startsWith("/about")) {
    return "about";
  }

  if (path.startsWith("/services")) {
    return "services";
  }

  if (path.startsWith("/courses")) {
    return "courses";
  }

  if (path.startsWith("/solutions")) {
    return "solutions";
  }

  if (path.startsWith("/careers") || path.startsWith("/career")) {
    return "careers";
  }

  return "about";
}

export default function MedicalBackground() {
  const location = useLocation();

  const pageType = getPageType(location.pathname);
  const config = PAGE_CONFIG[pageType];

  const particles = useMemo(() => {
    return Array.from({ length: 18 }, (_, index) => ({
      id: index,
      left: `${5 + ((index * 17) % 90)}%`,
      top: `${8 + ((index * 29) % 82)}%`,
      delay: `${(index % 7) * 0.8}s`,
      duration: `${12 + (index % 6) * 2}s`,
      size: `${3 + (index % 3)}px`,
    }));
  }, []);

  const nodes = useMemo(() => {
    return Array.from({ length: 10 }, (_, index) => ({
      id: index,
      left: `${10 + ((index * 23) % 80)}%`,
      top: `${12 + ((index * 31) % 70)}%`,
      delay: `${(index % 5) * 1.2}s`,
    }));
  }, []);

  return (
    <div
      className={`medical-background ${config.className}`}
      aria-hidden="true"
    >
      {/* Soft background glow */}
      <div className="medical-glow medical-glow-one" />
      <div className="medical-glow medical-glow-two" />

      {/* Connected medical network */}
      <div className="medical-network">
        <span className="network-line network-line-one" />
        <span className="network-line network-line-two" />
        <span className="network-line network-line-three" />
        <span className="network-line network-line-four" />
        <span className="network-line network-line-five" />
      </div>

      {/* Floating particles */}
      <div className="medical-particles">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="medical-particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              width: particle.size,
              height: particle.size,
            }}
          />
        ))}
      </div>

      {/* Medical nodes */}
      <div className="medical-nodes">
        {nodes.map((node) => (
          <span
            key={node.id}
            className="medical-node"
            style={{
              left: node.left,
              top: node.top,
              animationDelay: node.delay,
            }}
          />
        ))}
      </div>

      {/* Floating medical symbols */}
      <div className="medical-symbols">
        {config.symbols.map((symbol, index) => (
          <span
            key={`${symbol}-${index}`}
            className={`medical-symbol symbol-${index + 1}`}
          >
            {symbol}
          </span>
        ))}
      </div>

      {/* ECG */}
      <div className="medical-ecg-background">
        <svg
          viewBox="0 0 1000 180"
          preserveAspectRatio="none"
          className="ecg-svg"
        >
          <path
            className="ecg-path"
            d="
              M0,90
              L110,90
              L130,90
              L145,90
              L160,90
              L175,90
              L185,90
              L195,70
              L205,110
              L220,90
              L250,90
              L265,90
              L280,90
              L295,90
              L310,90
              L325,90
              L340,90
              L355,90
              L370,90
              L385,90
              L400,90
              L415,90
              L430,90
              L445,90
              L460,90
              L475,90
              L490,90
              L505,90
              L520,90
              L535,90
              L550,90
              L565,90
              L580,90
              L595,90
              L610,90
              L625,90
              L640,90
              L655,90
              L670,90
              L685,90
              L700,90
              L715,90
              L730,90
              L745,90
              L760,90
              L775,90
              L790,90
              L805,90
              L820,90
              L835,90
              L850,90
              L865,90
              L880,90
              L895,90
              L910,90
              L925,90
              L940,90
              L955,90
              L970,90
              L1000,90
            "
          />
        </svg>
      </div>

      {/* Moving pulse point */}
      <div className="ecg-pulse-point" />
    </div>
  );
}