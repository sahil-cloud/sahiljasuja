import React from 'react';

// Abstract, static illustration: parallel process timelines with
// coordinated checkpoint barriers, a nod to checkpoint/restart work.
const lanes = [0, 1, 2, 3, 4];
const barriers = [110, 250, 390];

export default function HeroGraphic() {
  return (
    <svg
      className="hero__graphic"
      viewBox="0 0 480 300"
      role="img"
      aria-label="Abstract diagram of parallel processes with coordinated checkpoints"
    >
      <defs>
        <linearGradient id="lane" x1="0" x2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0" />
          <stop offset="0.15" stopColor="currentColor" stopOpacity="0.5" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      {barriers.map((x, i) => (
        <g key={x}>
          <line
            x1={x}
            x2={x}
            y1="30"
            y2="270"
            className="hero__barrier"
          />
          <text x={x} y="20" className="hero__label" textAnchor="middle">
            ckpt {i}
          </text>
        </g>
      ))}
      {lanes.map((l) => {
        const y = 60 + l * 45;
        return (
          <g key={l}>
            <text x="0" y={y + 4} className="hero__label">
              p{l}
            </text>
            <line x1="28" x2="470" y1={y} y2={y} stroke="url(#lane)" />
            {barriers.map((x) => (
              <rect
                key={x}
                x={x - 4}
                y={y - 4}
                width="8"
                height="8"
                className="hero__node"
              />
            ))}
            <rect
              x={140 + ((l * 37) % 90)}
              y={y - 2}
              width={24 + ((l * 13) % 30)}
              height="4"
              className="hero__work"
            />
          </g>
        );
      })}
      <line x1="390" x2="470" y1="285" y2="285" className="hero__restore" />
      <text x="470" y="298" className="hero__label" textAnchor="end">
        restart ↺
      </text>
    </svg>
  );
}
