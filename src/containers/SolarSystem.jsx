import React, { useMemo } from "react";
import SectionHeading from "../components/SectionHeading";

// Random int inclusive
const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Shuffle helper so the words don’t always start in the same order
const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

/**
 * Responsive "Solar System" with 4–5 orbits. Words are placed as planets.
 * - words: string[] (required)
 * - sunText?: string
 * - minOrbits?: number (default 4)
 * - maxOrbits?: number (default 5)
 * - minPerOrbit?: number (default 1)
 * - maxPerOrbit?: number (default 8)
 */
const SolarSystem = ({
  words = [],
  sunText = "Core",
  minOrbits = 4,
  maxOrbits = 5,
  minPerOrbit = 1,
  maxPerOrbit = 8,
}) => {
  // Decide orbit count once per mount
  const orbitCount = useMemo(
    () => randInt(minOrbits, maxOrbits),
    [minOrbits, maxOrbits]
  );

  // Radii as percentages of the container (keep <= 45% for the outermost so it stays inside)
  const radii = useMemo(() => {
    const minR = 18; // inner radius %
    const maxR = 45; // outer radius %
    const step = orbitCount > 1 ? (maxR - minR) / (orbitCount - 1) : 0;
    return Array.from(
      { length: orbitCount },
      (_, i) => +(minR + i * step).toFixed(2)
    ); // numbers
  }, [orbitCount]);

  // Distribute words randomly across orbits (at least 1 per orbit if possible)
  const orbits = useMemo(() => {
    const pool = shuffle(words);
    const res = [];
    let remaining = pool.length;

    for (let i = 0; i < orbitCount; i++) {
      if (remaining <= 0) {
        res.push({ radius: radii[i], words: [] });
        continue;
      }

      // Reserve 1 for each later orbit if we have enough words
      const orbitsLeft = orbitCount - i - 1;
      const minReserve = Math.max(0, orbitsLeft); // at least one for each remaining orbit
      const maxTake = Math.max(
        1,
        Math.min(maxPerOrbit, remaining - minReserve)
      );
      const minTake = Math.min(minPerOrbit, maxTake);

      const take = i === orbitCount - 1 ? remaining : randInt(minTake, maxTake);

      res.push({
        radius: radii[i],
        words: pool.splice(0, take),
      });
      remaining -= take;
    }

    return res;
  }, [words, orbitCount, radii, minPerOrbit, maxPerOrbit]);

  return (
    // Use inline width/height to avoid Tailwind JIT missing arbitrary values
    <SectionHeading heading={"Out tech stack"}>
      <div
        className="relative mx-auto flex items-center justify-center"
        style={{
          width: "min(90vmin, 820px)",
          height: "min(90vmin, 820px)",
        }}
      >
        {/* Sun */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   rounded-full bg-yellow-400 text-gray-900 font-semibold
                   flex items-center justify-center text-center shadow-lg shadow-yellow-400/40
                   select-none"
          style={{
            width: "18%",
            height: "18%",
            fontSize: "clamp(0.8rem, 2.3vmin, 1.1rem)",
          }}
        >
          {sunText}
        </div>

        {/* Orbit paths */}
        {orbits.map((o, idx) => (
          <div
            key={`orbit-${idx}`}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                      rounded-full border border-dashed border-gray-400 dark:border-gray-700 
                      pointer-events-none ${
                        idx % 2
                          ? "animate-[spin_90s_linear_infinite_reverse]"
                          : "animate-[spin_70s_linear_infinite]"
                      }`}
            style={{
              width: `${o.radius * 2}%`,
              height: `${o.radius * 2}%`,
            }}
          />
        ))}

        {/* Planets */}
        {orbits.flatMap((o, orbitIdx) => {
          const count = o.words.length || 1; // avoid div by zero
          const step = 360 / count;
          const startOffset = Math.random() * 360; // randomize starting angle for each orbit

          return o.words.map((label, i) => {
            const angleDeg = startOffset + step * i;
            const rad = (angleDeg * Math.PI) / 180;
            const x = `${(o.radius * Math.cos(rad)).toFixed(4)}%`;
            const y = `${(o.radius * Math.sin(rad)).toFixed(4)}%`;

            return (
              <div
                key={`planet-${orbitIdx}-${i}`}
                className="absolute -translate-x-1/2 -translate-y-1/2
                         bg-sky-500 text-white rounded-full shadow-md
                         px-3 py-1.5 text-[11px] md:text-xs lg:text-sm
                         hover:bg-sky-400 hover:scale-105 transition-transform duration-300
                         whitespace-nowrap select-none"
                style={{
                  left: `calc(50% + ${x})`,
                  top: `calc(50% + ${y})`,
                }}
                title={label}
              >
                {label}
              </div>
            );
          });
        })}
      </div>
    </SectionHeading>
  );
};

export default SolarSystem;
