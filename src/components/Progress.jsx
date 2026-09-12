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
    background: "rgba(245, 158, 11, 0.08)",
  },
  fill: {
    height: "100%",
    background: "linear-gradient(90deg, #D97706, #F59E0B, #FDE68A)",
    transition: "width 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
    boxShadow: "0 0 12px rgba(245, 158, 11, 0.6)",
  },
};
