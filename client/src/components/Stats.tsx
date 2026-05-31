import { useEffect, useRef, useState } from 'react';
import { STATS } from '@/lib/constants';

export function Stats() {
  const [counts, setCounts] = useState<number[]>(STATS.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCounts();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounts = () => {
    const duration = 2000;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);

      const newCounts = STATS.map((stat) => {
        const eased = 1 - Math.pow(1 - progress, 3);
        return Math.round(eased * stat.value);
      });

      setCounts(newCounts);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-primary">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-4xl md:text-5xl font-bold text-accent">
                  {counts[idx].toLocaleString('ja-JP')}
                </span>
                <span className="text-lg md:text-xl text-accent/80">{stat.unit}</span>
              </div>
              <p className="text-white/60 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
