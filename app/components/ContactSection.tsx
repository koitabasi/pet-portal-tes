'use client';

import React, { useState } from 'react';
import ContactModal from './ContactModal';

const ContactSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className="py-16 sm:py-20 bg-gradient-to-br from-light-blue via-white to-light-green">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                        お気軽にお問い合わせください
                    </h2>
                    <p className="text-gray-600 text-lg mb-8">
                        サービスに関するご質問や施設見学のご予約など、
                        <br className="hidden sm:block" />
                        お気軽にお問い合わせください。
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-gradient-to-r from-primary-blue to-primary-green text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                        お問い合わせ
                    </button>
                </div>
            </section>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default ContactSection;
