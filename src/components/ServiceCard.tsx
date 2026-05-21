"use client";

import { useState } from "react";
import type { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
  time: string;
}

export default function ServiceCard({ icon, title, desc, time }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="rounded-2xl p-7 transition-all duration-300"
      style={{
        background: hovered ? "rgba(255,107,53,0.06)" : "rgba(255,255,255,0.03)",
        border: hovered
          ? "1px solid rgba(255,107,53,0.2)"
          : "1px solid rgba(255,255,255,0.07)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{
            background: "rgba(255,107,53,0.1)",
            border: "1px solid rgba(255,107,53,0.2)",
          }}
        >
          {icon}
        </div>
        <span
          className="text-xs font-medium px-3 py-1.5 rounded-full"
          style={{
            background: "rgba(255,107,53,0.1)",
            color: "#FF6B35",
            border: "1px solid rgba(255,107,53,0.2)",
            fontFamily: "'SF Pro Text', sans-serif",
          }}
        >
          {time}
        </span>
      </div>
      <h3
        className="text-lg font-semibold text-white mb-2"
        style={{ fontFamily: "'SF Pro Display', sans-serif" }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{
          fontFamily: "'SF Pro Text', sans-serif",
          color: "rgba(255,255,255,0.4)",
        }}
      >
        {desc}
      </p>
    </div>
  );
}