import { FLOW } from '@/lib/constants';

export function Flow() {
  return (
    <section id="flow" className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-accent"></div>
            <span className="text-xs tracking-widest text-accent font-semibold">HOW IT WORKS</span>
            <div className="w-12 h-0.5 bg-accent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">ご依頼の流れ</h2>
        </div>

        {/* Flow Steps */}
        <div className="grid md:grid-cols-5 gap-4 md:gap-2">
          {FLOW.map((item, idx) => (
            <div key={idx} className="relative">
              {/* Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:border-accent hover:shadow-lg transition-all h-full flex flex-col">
                <div className="w-12 h-12 bg-accent/15 border border-accent/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${item.icon} text-accent text-lg`}></i>
                </div>
                <span className="text-xs tracking-widest text-accent font-bold mb-2">
                  {item.step}
                </span>
                <h3 className="text-base font-serif font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-primary/70 flex-grow">
                  {item.description}
                </p>
              </div>

              {/* Arrow */}
              {idx < FLOW.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-0.5 bg-accent"></div>
                  <div className="w-2 h-2 bg-accent rounded-full ml-1"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
