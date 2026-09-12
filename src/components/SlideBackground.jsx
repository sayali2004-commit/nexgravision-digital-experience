import React from "react";

export default function SlideBackground({ orbColor, orbPosition, showGrid = true }) {
  return (
    <>
      {showGrid && <div className="bg-grid" />}
      <div className="bg-ambient-warm" style={{ top: "10%", right: "5%" }} />
      <div className="bg-ambient-blue" style={{ bottom: "5%", left: "5%" }} />
      {orbColor && (
        <div
          style={{
            position: "absolute",
            width: 650,
            height: 650,
            borderRadius: "50%",
            filter: "blur(130px)",
            pointerEvents: "none",
            opacity: 0.12,
            background: orbColor,
            top: orbPosition?.top || "40%",
            left: orbPosition?.left || "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
          }}
        />
      )}
    </>
  );
}
