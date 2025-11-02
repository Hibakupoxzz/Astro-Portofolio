import React from "react";
import Wave from "react-wavify";

export default function WaveBackground() {
  return (
    <div style={{ position: "relative", width: "100%", height: "150px" }}>
      <Wave
        fill="#6C63FF"
        paused={false}
        options={{
          height: 25,
          amplitude: 25,
          speed: 0.25,
          points: 5,
        }}
      />
    </div>
  );
}
