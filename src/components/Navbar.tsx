'use client';

import React from 'react';
import { FaRocket } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <div className="flex items-center space-x-3">
        <FaRocket className="text-2xl text-blue-600" />
        <span className="text-xl font-bold text-gray-800">Pricing</span>
      </div>
      
      <div className="flex items-center space-x-4">
        <button 
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}
