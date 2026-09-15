import React, { useState } from "react";

export default function Navigation({ onPrev, onNext, current, total }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  const btnBase = {
    width: 38,
    height: 38,
    borderRadius: "50%",
    border: "1px solid rgba(255, 255, 255, 0.12)",
            background: "rgba(8, 13, 26, 0.75)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    color: "#F8FAFC",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.25s ease",
    pointerEvents: "auto",
    outline: "none",
  };

  const disabled = (dir) => dir === "prev" ? current === 0 : current === total - 1;

  return (
    <div style={styles.wrap}>
      <div style={styles.right}>
        <button
          onClick={onPrev}
          disabled={disabled("prev")}
          style={{
            ...btnBase,
            opacity: disabled("prev") ? 0.25 : 1,
            cursor: disabled("prev") ? "default" : "pointer"
          }}
          onMouseEnter={(e) => {
            if (!disabled("prev")) {
              e.currentTarget.style.background = "rgba(0, 180, 216, 0.2)";
              e.currentTarget.style.borderColor = "rgba(0, 180, 216, 0.5)";
              e.currentTarget.style.color = "#7DD3FC";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(8, 13, 26, 0.75)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
            e.currentTarget.style.color = "#F8FAFC";
          }}
          aria-label="Previous Slide"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button
          onClick={onNext}
          disabled={disabled("next")}
          style={{
            ...btnBase,
            opacity: disabled("next") ? 0.25 : 1,
            cursor: disabled("next") ? "default" : "pointer"
          }}
          onMouseEnter={(e) => {
            if (!disabled("next")) {
              e.currentTarget.style.background = "rgba(0, 180, 216, 0.2)";
              e.currentTarget.style.borderColor = "rgba(0, 180, 216, 0.5)";
              e.currentTarget.style.color = "#7DD3FC";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(8, 13, 26, 0.75)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
            e.currentTarget.style.color = "#F8FAFC";
          }}
          aria-label="Next Slide"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button
          onClick={toggleFullscreen}
          style={{
            ...btnBase,
            background: "rgba(0, 180, 216, 0.1)",
            borderColor: "rgba(0, 180, 216, 0.25)",
            color: "#7DD3FC"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(0, 180, 216, 0.25)";
            e.currentTarget.style.borderColor = "rgba(0, 180, 216, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(0, 180, 216, 0.1)";
            e.currentTarget.style.borderColor = "rgba(0, 180, 216, 0.25)";
          }}
          title="Toggle Fullscreen (F)"
          aria-label="Fullscreen"
        >
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
            {isFullscreen ? (
              <path d="M6 3V6H3M10 3V6H13M6 13V10H3M10 13V10H13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            ) : (
              <path d="M3 6V3H6M10 3H13V6M13 10V13H10M6 13H3V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            )}
          </svg>
        </button>
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    position: "fixed",
    bottom: 28,
    right: 48,
    display: "flex",
    alignItems: "center",
    pointerEvents: "none",
    zIndex: 100,
  },
  right: {
    display: "flex",
    gap: 8,
    pointerEvents: "auto",
    alignItems: "center",
  },
};
