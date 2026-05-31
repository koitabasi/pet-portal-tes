import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'https://www.samurai-cleaning.osaka.jp/IMG_3255.jpg',
    'https://www.samurai-cleaning.osaka.jp/IMG_3249.jpg',
    'https://www.samurai-cleaning.osaka.jp/IMG_3312.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center text-white">
        <div className="mb-8 inline-block px-4 py-2 border border-accent/50 rounded-lg">
          <span className="text-accent text-sm tracking-widest">Quality of Samurai</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <div className="text-xl md:text-2xl font-light mb-2">清潔は、</div>
          <div className="text-accent">信頼のかたち。</div>
        </h1>

        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          民泊・ホテル清掃からハウスクリーニングまで。<br />
          大阪のプロフェッショナルが、誠実さと確かな技術をお届けします。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="#contact"
            className="px-8 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
          >
            <i className="fas fa-envelope"></i>
            無料見積もりを依頼する
          </a>
          <a
            href={`tel:${COMPANY.phone}`}
            className="px-8 py-3 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent/10 transition-colors flex items-center justify-center gap-2"
          >
            <i className="fas fa-phone"></i>
            今すぐ電話する
          </a>
        </div>

        <p className="text-sm text-white/70 flex items-center justify-center gap-2">
          <i className="fas fa-clock"></i>
          24時間365日受付・緊急対応可能
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="text-center">
          <p className="text-white/60 text-xs tracking-widest mb-2">SCROLL</p>
          <ChevronDown size={20} className="text-accent mx-auto" />
        </div>
      </div>
    </section>
  );
}
