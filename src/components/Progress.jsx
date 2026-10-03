import React from "react";

export default function Progress({ current, total }) {
  const progress = ((current + 1) / total) * 100;

  return (
    <div style={styles.wrap}>
      <div style={styles.track}>
        <div
          style={{
            ...styles.fill,
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    zIndex: 200,
  },
  track: {
    width: "100%",
    height: "100%",
    background: "rgba(0, 180, 216, 0.08)",
  },
  fill: {
    height: "100%",
    background: "linear-gradient(90deg, #0284C7, #00B4D8, #7DD3FC)",
    transition: "width 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
    boxShadow: "0 0 12px rgba(0, 180, 216, 0.6)",
  },
};
