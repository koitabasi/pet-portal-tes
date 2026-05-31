import { useState } from 'react';
import { COMPANY, SERVICES } from '@/lib/constants';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    privacy: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.service) {
      toast.error('必須項目を入力してください');
      return;
    }

    if (!formData.privacy) {
      toast.error('プライバシーポリシーに同意してください');
      return;
    }

    // Show success message
    toast.success('お問い合わせありがとうございます。確認後、ご連絡させていただきます。');

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: '',
      privacy: false,
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            お問い合わせ・無料見積もり
          </h2>
          <p className="text-base text-primary/70 max-w-2xl mx-auto">
            24時間365日受付。まずはお気軽にご相談ください。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Phone Contact */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent/15 border border-accent/30 rounded-lg flex items-center justify-center">
                <i className="fas fa-phone text-accent text-lg"></i>
              </div>
              <div>
                <p className="text-xs text-primary/60 font-semibold">電話でのご相談（24時間受付）</p>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-2xl font-bold text-accent hover:text-yellow-300 transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </div>
            </div>
            <p className="text-sm text-primary/70">深夜・早朝・祝日も対応可能です</p>
          </div>

          {/* Email Contact */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-lg font-bold text-primary mb-6">メールでのお問い合わせ</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="山田 太郎"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  電話番号 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="090-1234-5678"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  メールアドレス
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  ご相談内容 <span className="text-red-500">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                >
                  <option value="">サービスを選択してください</option>
                  <option value="accommodation">民泊・ホテル清掃</option>
                  <option value="house">ハウスクリーニング</option>
                  <option value="commercial">店舗・オフィス清掃</option>
                  <option value="other">残置物回収</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  詳細・ご要望
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="現場の状況や、ご希望の作業日程などをご記入ください。"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent resize-none"
                ></textarea>
              </div>

              {/* Privacy */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="privacy"
                  id="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  className="mt-1"
                />
                <label htmlFor="privacy" className="text-sm text-primary/70">
                  <a href="#" className="text-accent hover:underline">
                    プライバシーポリシー
                  </a>
                  に同意する
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-yellow-300 transition-colors"
              >
                無料で相談する
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
