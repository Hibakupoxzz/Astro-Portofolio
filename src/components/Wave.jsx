import React from "react";
import Wave from "react-wavify";

export default function WaveBackground() {
  return (
    <div className="relative w-full h-[300px]">
      <Wave
        fill="#7CB3FF"
        paused={false}
        options={{
          height: 80,      // ini tinggi dasar gelombang (ubah jadi 100 kalau mau lebih tinggi)
          amplitude: 40,   // tinggi naik-turunnya ombak
          speed: 0.25,     // kecepatan animasi
          points: 4        // jumlah gelombang
        }}
        className="absolute bottom-0 left-0 w-full h-[300px]"
      />
    </div>
  );
}
