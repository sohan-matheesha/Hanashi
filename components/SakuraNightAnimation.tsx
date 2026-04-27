"use client";

import { useEffect, useState } from "react";

type Petal = {
  id: number;
  left: string;
  delay: string;
  duration: string;
  size: number;
  blur: string;
  opacity: number;
  sway: string;
};

export default function SakuraNightAnimation() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // We generate the random values inside useEffect to ensure they only run
    // on the client. This avoids hydration mismatches and satisfies React 19's
    // purity rules (since useEffect is not part of the render phase).
    const generatedPetals = Array.from({ length: 35 }).map((_, index) => ({
      id: index,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${10 + Math.random() * 12}s`,
      size: 10 + Math.random() * 28,
      blur: Math.random() > 0.7 ? "blur-[2px]" : "",
      opacity: 0.45 + Math.random() * 0.45,
      sway: `${-40 + Math.random() * 80}px`,
    }));

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPetals(generatedPetals);
  }, []);

  // Return null on the server and initial mount to avoid hydration mismatch
  if (petals.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className={`sakura-night-petal ${petal.blur}`}
          style={{
            left: petal.left,
            width: `${petal.size}px`,
            height: `${petal.size * 0.62}px`,
            opacity: petal.opacity,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            ["--sway" as string]: petal.sway,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.22),transparent_32%),radial-gradient(circle_at_45%_55%,rgba(168,85,247,0.18),transparent_35%)]" />
    </div>
  );
}