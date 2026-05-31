import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '会社概要', href: '#about' },
    { label: '事業内容', href: '#services' },
    { label: '選ばれる理由', href: '#reasons' },
    { label: 'ご依頼の流れ', href: '#flow' },
    { label: '会社情報', href: '#company' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-tight">
          <span className="font-serif text-lg font-bold text-white">
            株式会社士
          </span>
          <span className="font-sans text-xs font-light text-accent tracking-widest">
            SAMURAI CLEANING
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${COMPANY.phone}`}
            className="text-accent hover:text-yellow-300 transition-colors flex items-center gap-2"
          >
            <i className="fas fa-phone text-sm"></i>
            <span className="text-sm">{COMPANY.phone}</span>
          </a>
          <a
            href="#contact"
            className="px-4 py-2 bg-accent text-primary font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
          >
            無料相談
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white"
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-primary/95 backdrop-blur-md border-t border-accent/20">
          <nav className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-accent transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 px-4 py-2 bg-accent text-primary font-semibold rounded-lg hover:bg-yellow-300 transition-colors text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              無料相談・お問い合わせ
            </a>
            <a
              href={`tel:${COMPANY.phone}`}
              className="text-accent hover:text-yellow-300 transition-colors flex items-center gap-2 py-2"
            >
              <i className="fas fa-phone text-sm"></i>
              <span>{COMPANY.phone}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
