import { COMPANY } from '@/lib/constants';

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-accent"></div>
                <span className="text-xs tracking-widest text-accent font-semibold">ABOUT US</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                「士」という名に恥じぬ<br />
                <em className="text-accent not-italic">誠実な組織</em>であること。
              </h2>
            </div>

            <p className="text-base md:text-lg text-primary/80 mb-4 leading-relaxed">
              株式会社士（サムライ）は、大阪を拠点に民泊清掃・ホテル清掃を中心とした総合清掃サービスを提供しています。
            </p>

            <p className="text-base text-primary/70 mb-6 leading-relaxed">
              ホテル清掃で培った確かな技術力と、誠実で丁寧な仕事を大切にし、清潔で心地よい空間づくりを支えるプロフェッショナル集団です。民泊運営における「清掃品質の安定」「急な予約変動への対応」など、運営者さまの課題に寄り添い、安定した品質と柔軟な対応力で信頼をいただいております。
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {['#民泊清掃', '#ホテル清掃', '#ハウスクリーニング', '#店舗清掃', '#残置物回収', '#大阪'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-yellow-300 transition-colors"
            >
              ご相談・お見積もり（無料）
            </a>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://www.samurai-cleaning.osaka.jp/IMG_3248.jpg"
                alt="客室清掃の様子"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://www.samurai-cleaning.osaka.jp/S__62431261.jpg"
                  alt="ベッドメイクの仕上げ"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="relative bg-gradient-to-br from-accent to-accent/80 rounded-lg p-6 flex flex-col justify-center items-center text-primary">
                <div className="text-4xl font-bold mb-2">300<span className="text-2xl">+</span></div>
                <p className="text-sm font-semibold text-center">契約実績</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
