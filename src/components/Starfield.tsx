import '../styles/Starfield.css';

const STAR_COUNT = 140;

function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

const random = seededRandom(42);

const stars = Array.from({ length: STAR_COUNT }, (_, index) => {
  const sizeRoll = random();
  const colorRoll = random();

  const tier = sizeRoll < 0.7 ? 'tiny' : sizeRoll < 0.92 ? 'small' : 'bright';
  const sizeRange = tier === 'tiny' ? [0.5, 1] : tier === 'small' ? [1, 1.5] : [1.6, 2.2];
  const size = sizeRange[0] + random() * (sizeRange[1] - sizeRange[0]);

  const colorClass =
    tier === 'bright' && colorRoll < 0.3
      ? 'star-pink'
      : tier === 'bright' && colorRoll < 0.55
        ? 'star-lavender'
        : '';

  return {
    id: index,
    top: `${random() * 100}%`,
    left: `${random() * 100}%`,
    size,
    duration: 2 + random() * 4,
    delay: random() * 6,
    className: `star star-${tier} ${colorClass}`.trim(),
  };
});

function Starfield() {
  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className={star.className}
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default Starfield;
