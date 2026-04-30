import React from 'react';

const COLORS = ['#ff4757', '#ffa502', '#2ed573', '#1e90ff', '#ff6b81', '#eccc68', '#a29bfe'];
const PARTICLE_COUNT = 120;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createParticles() {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    x: randomBetween(5, 95),
    y: randomBetween(5, 95),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    size: randomBetween(4, 8),
    angle: randomBetween(0, 360),
    distance: randomBetween(60, 180),
    duration: randomBetween(1.2, 2.4),
    delay: randomBetween(0, 0.6),
  }));
}

function Fireworks() {
  const [particles] = React.useState(createParticles);

  return (
    <div className='fireworks-container' aria-hidden='true'>
      {particles.map((p) => {
        const rad = (p.angle * Math.PI) / 180;
        const tx = Math.cos(rad) * p.distance;
        const ty = Math.sin(rad) * p.distance;
        return (
          <div
            key={p.id}
            className='firework-particle'
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background: p.color,
              '--tx': `${tx}px`,
              '--ty': `${ty}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}

export default Fireworks;
