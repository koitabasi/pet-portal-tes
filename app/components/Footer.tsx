import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary-blue to-primary-green bg-clip-text text-transparent">
                            PET COMPOSITE NAVI
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            ペットと暮らすすべてをサポートする複合施設。
                            生体販売からケアサービスまで、トータルでお手伝いします。
                        </p>
                    </div>

                    {/* Facility Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">施設情報</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li>営業時間: 10:00 - 19:00</li>
                            <li>定休日: 毎週水曜日</li>
                            <li>駐車場: 完備（無料）</li>
                            <li>住所: 〒123-4567 東京都○○区○○町1-2-3</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-2 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                TEL: 03-1234-5678
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-2 text-primary-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                info@petcomposite.jp
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; 2024 PET COMPOSITE NAVI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
