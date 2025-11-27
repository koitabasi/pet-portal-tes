'use client';

import React from 'react';

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-blue to-primary-green bg-clip-text text-transparent">
              PET COMPOSITE NAVI
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection('pet-sales')}
              className="text-gray-600 hover:text-primary-blue transition-colors duration-200 text-sm font-medium"
            >
              生体販売
            </button>
            <button
              onClick={() => scrollToSection('retail')}
              className="text-gray-600 hover:text-primary-blue transition-colors duration-200 text-sm font-medium"
            >
              物販
            </button>
            <button
              onClick={() => scrollToSection('care')}
              className="text-gray-600 hover:text-primary-blue transition-colors duration-200 text-sm font-medium"
            >
              ケアサービス
            </button>
            <button
              onClick={() => scrollToSection('hotel')}
              className="text-gray-600 hover:text-primary-blue transition-colors duration-200 text-sm font-medium"
            >
              ホテル
            </button>
            <button
              onClick={() => scrollToSection('dog-run')}
              className="text-gray-600 hover:text-primary-blue transition-colors duration-200 text-sm font-medium"
            >
              ドッグラン
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-primary-blue">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
