'use client';

import React from 'react';
import { FaRocket } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800 shadow-sm">
      <div className="flex items-center space-x-3">
        <FaRocket className="text-2xl text-blue-500" />
        <span className="text-xl font-bold text-white">Pricing</span>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="text-white hover:opacity-80 transition-opacity">
          Login
        </button>
      </div>
    </nav>
  );
}
