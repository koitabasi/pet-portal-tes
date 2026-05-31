'use client';

import React from 'react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Content */}
                <div className="text-center">
                    <div className="mb-6">
                        <div className="mx-auto w-16 h-16 bg-gradient-to-br from-light-blue to-light-green rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-3">準備中</h3>
                    <p className="text-gray-600 mb-6">
                        お問い合わせフォームは現在準備中です。
                        <br />
                        もうしばらくお待ちください。
                    </p>

                    <button
                        onClick={onClose}
                        className="bg-gradient-to-r from-primary-blue to-primary-green text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        閉じる
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
