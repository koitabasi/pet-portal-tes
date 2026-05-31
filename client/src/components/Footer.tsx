import { COMPANY, SERVICES } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-tight mb-4">
              <span className="font-serif text-lg font-bold">株式会社士</span>
              <span className="font-sans text-xs font-light text-accent tracking-widest">
                SAMURAI CLEANING
              </span>
            </div>
            <p className="text-white/70 text-sm mb-4">{COMPANY.tagline}</p>
            <div className="flex gap-4">
              <a
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent/15 border border-accent/30 rounded-lg flex items-center justify-center hover:bg-accent/25 transition-colors"
              >
                <i className="fab fa-instagram text-accent"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-accent">SERVICES</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-colors text-sm">
                  民泊清掃・ホテル清掃
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-colors text-sm">
                  ハウスクリーニング
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-colors text-sm">
                  店舗・オフィス清掃
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-colors text-sm">
                  残置物回収
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-6 text-accent">COMPANY</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/70 hover:text-accent transition-colors text-sm">
                  会社概要
                </a>
              </li>
              <li>
                <a href="#reasons" className="text-white/70 hover:text-accent transition-colors text-sm">
                  選ばれる理由
                </a>
              </li>
              <li>
                <a href="#flow" className="text-white/70 hover:text-accent transition-colors text-sm">
                  ご依頼の流れ
                </a>
              </li>
              <li>
                <a href="#company" className="text-white/70 hover:text-accent transition-colors text-sm">
                  会社情報
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-accent transition-colors text-sm">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-sm text-white/70">
              <p className="mb-2">{COMPANY.address}</p>
              <a href={`tel:${COMPANY.phone}`} className="text-accent hover:text-yellow-300 transition-colors">
                {COMPANY.phone}
              </a>
            </div>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-white/70 hover:text-accent transition-colors">
                プライバシーポリシー
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors">
                サイトポリシー
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6">
        <div className="container">
          <p className="text-center text-sm text-white/50">
            © 2026 SAMURAI CORPORATION. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <a
          href={`tel:${COMPANY.phone}`}
          className="w-14 h-14 bg-accent text-primary rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-300 transition-colors"
        >
          <i className="fas fa-phone text-lg"></i>
        </a>
        <a
          href="#contact"
          className="w-14 h-14 bg-primary border-2 border-accent text-accent rounded-full flex items-center justify-center shadow-lg hover:bg-accent hover:text-primary transition-colors"
        >
          <i className="fas fa-envelope text-lg"></i>
        </a>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 left-6 w-14 h-14 bg-primary border-2 border-accent text-accent rounded-full flex items-center justify-center shadow-lg hover:bg-accent hover:text-primary transition-colors z-40 hidden md:flex"
      >
        <i className="fas fa-arrow-up text-lg"></i>
      </button>
    </footer>
  );
}
