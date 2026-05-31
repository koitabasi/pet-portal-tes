import { SERVICES } from '@/lib/constants';

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-accent"></div>
            <span className="text-xs tracking-widest text-accent font-semibold">OUR SERVICES</span>
            <div className="w-12 h-0.5 bg-accent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">事業内容</h2>
          <p className="text-base text-primary/70 max-w-2xl mx-auto">
            ホテル基準の技術と豊富な経験で、あらゆる清掃ニーズにお応えします。
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <span className="absolute bottom-4 right-4 text-6xl font-bold text-white/15">
                  {service.number}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold tracking-wider rounded-full mb-3">
                  {service.tag}
                </span>
                <h3 className="text-xl font-serif font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-primary/70 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-primary/70">
                      <i className="fas fa-check text-accent mt-1 flex-shrink-0"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold rounded-lg hover:bg-accent hover:text-primary transition-colors text-sm"
                >
                  相談・見積もり（無料）
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
