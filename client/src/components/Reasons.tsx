import { REASONS } from '@/lib/constants';

export function Reasons() {
  return (
    <section
      id="reasons"
      className="relative py-16 md:py-24 bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5 text-9xl font-bold text-white pointer-events-none">
        <span className="absolute right-0 top-1/2 transform -translate-y-1/2">士</span>
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-accent"></div>
            <span className="text-xs tracking-widest text-accent font-semibold">WHY CHOOSE US</span>
            <div className="w-12 h-0.5 bg-accent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">選ばれる理由</h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {REASONS.map((reason) => (
            <div
              key={reason.id}
              className="bg-white/5 backdrop-blur-sm border border-accent/20 rounded-lg p-6 hover:bg-white/10 hover:border-accent/40 transition-all group"
            >
              <div className="w-12 h-12 bg-accent/15 border border-accent/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/25 transition-colors">
                <i className={`fas ${reason.icon} text-accent text-lg`}></i>
              </div>
              <span className="text-xs tracking-widest text-accent font-semibold block mb-2">
                {reason.number}
              </span>
              <h3 className="text-base font-serif font-bold text-white mb-3 leading-tight">
                {reason.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
