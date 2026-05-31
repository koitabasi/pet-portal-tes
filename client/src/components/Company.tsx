import { COMPANY } from '@/lib/constants';

export function Company() {
  return (
    <section id="company" className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-accent"></div>
            <span className="text-xs tracking-widest text-accent font-semibold">CORPORATE PROFILE</span>
            <div className="w-12 h-0.5 bg-accent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">会社情報</h2>
        </div>

        {/* Info Table */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 font-semibold text-primary bg-gray-50 w-1/3">会社名</td>
                  <td className="py-4 px-4 text-primary">{COMPANY.name}（{COMPANY.nameEn}）</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 font-semibold text-primary bg-gray-50">代表者</td>
                  <td className="py-4 px-4 text-primary">{COMPANY.ceo}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 font-semibold text-primary bg-gray-50">所在地</td>
                  <td className="py-4 px-4 text-primary">{COMPANY.address}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 font-semibold text-primary bg-gray-50">設立</td>
                  <td className="py-4 px-4 text-primary">{COMPANY.founded}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 font-semibold text-primary bg-gray-50">事業内容</td>
                  <td className="py-4 px-4 text-primary">客室清掃・施設内清掃・院内清掃・ハウスクリーニング</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-primary bg-gray-50">主要取引先</td>
                  <td className="py-4 px-4 text-primary">国内主要ホテル、商業施設、官公庁 他</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.7289834098305!2d135.4848!3d34.6506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e6b8b8b8b8b9%3A0x0!2z5aSn5bGF5biC5aSn5bGF!5e0!3m2!1sja!2sjp!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
