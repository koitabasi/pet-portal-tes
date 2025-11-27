import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = [
        {
            id: 'pet-sales',
            title: '生体販売',
            description: '健康で元気な子犬・子猫を厳選してご紹介。専門スタッフが丁寧にサポートいたします。',
            imageUrl: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=600&fit=crop',
        },
        {
            id: 'retail',
            title: '物販全般',
            description: 'フード、おもちゃ、ケア用品など、ペットライフに必要なアイテムを豊富に取り揃えています。',
            imageUrl: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=600&fit=crop',
        },
        {
            id: 'care',
            title: 'ケアサービス',
            description: 'トリミング、グルーミング、健康チェックまで。プロフェッショナルなケアをご提供します。',
            imageUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop',
            isVideoStyle: true,
            icon: (
                <svg
                    className="w-12 h-12 text-primary-blue"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
            ),
        },
        {
            id: 'hotel',
            title: 'ペットホテル',
            description: '安心・安全な環境で大切なペットをお預かり。24時間体制で見守ります。',
            imageUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop',
        },
        {
            id: 'dog-run',
            title: 'ドッグラン',
            description: '広々とした屋外スペースで、ワンちゃんが自由に走り回れます。小型犬・大型犬エリア完備。',
            imageUrl: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?w=800&h=600&fit=crop',
        },
    ];

    return (
        <section id="services" className="py-16 sm:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                        提供サービス
                    </h2>
                    <p className="text-gray-600 text-lg">
                        ペットとの暮らしをトータルサポート
                    </p>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            id={service.id}
                            title={service.title}
                            description={service.description}
                            imageUrl={service.imageUrl}
                            isVideoStyle={service.isVideoStyle}
                            icon={service.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
