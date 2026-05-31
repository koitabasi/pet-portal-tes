import { PARTNERS } from '@/lib/constants';

export function Partners() {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-gray-200">
      <div className="container">
        <p className="text-center text-sm text-primary/60 font-semibold tracking-widest mb-8">
          実績のある主要取引先ホテル
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center py-6 px-4 border border-gray-200 rounded-lg hover:border-accent/50 hover:bg-accent/5 transition-all"
            >
              <p className="text-center text-sm md:text-base font-medium text-primary/70">
                {partner}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
