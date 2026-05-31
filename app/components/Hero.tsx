'use client';

import React from 'react';

const Hero = () => {
    const scrollToServices = () => {
        const element = document.getElementById('services');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative bg-gradient-to-br from-light-blue via-white to-light-green py-20 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                    ペットと暮らす、
                    <br />
                    すべてがここに。
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                    生体販売からケアサービス、ホテル、ドッグランまで。
                    <br />
                    ペットライフのすべてをサポートする複合施設です。
                </p>
                <button
                    onClick={scrollToServices}
                    className="bg-gradient-to-r from-primary-blue to-primary-green text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                    サービスを見る
                </button>
            </div>
        </section>
    );
};

export default Hero;
