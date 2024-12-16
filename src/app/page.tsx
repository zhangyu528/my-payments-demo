"use client";

import Navbar from '@/components/Navbar';
import { useState } from 'react';

export default function Home() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const pricingPlans = [
    {
      name: 'Hobby',
      monthlyPrice: '$12',
      yearlyPrice: '$120',
      description: 'Perfect for personal projects',
      features: []
    },
    {
      name: 'Freelancer',
      monthlyPrice: '$24',
      yearlyPrice: '$240',
      description: 'All the basics for starting a new business',
      features: []
    },
    {
      name: 'Startup',
      monthlyPrice: '$32',
      yearlyPrice: '$320',
      description: 'All the basics for starting a new business!',
      features: []
    },
    {
      name: 'Enterprise',
      monthlyPrice: '$48',
      yearlyPrice: '$480',
      description: 'All the basics for starting a new business',
      features: []
    }
  ];

  return (
    <div className="text-white min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Pricing Plans
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Start building for free, then add a site plan to go live. Account plans unlock additional features.
          </p>
        </section>

        {/* Pricing Section */}
        <section>
          {/* Billing Cycle Switcher */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800 p-1 rounded-lg inline-flex">
              <button 
                onClick={() => setBillingCycle('monthly')}
                className={`
                  px-6 py-2 rounded-md transition-colors 
                  ${billingCycle === 'monthly' 
                    ? 'bg-gray-700 border border-pink-500 text-white' 
                    : 'text-white hover:bg-gray-700'
                  }
                `}
              >
                Monthly billing
              </button>
              <button 
                onClick={() => setBillingCycle('yearly')}
                className={`
                  px-6 py-2 rounded-md transition-colors 
                  ${billingCycle === 'yearly' 
                    ? 'bg-gray-700 border border-pink-500 text-white' 
                    : 'text-white hover:bg-gray-700'
                  }
                `}
              >
                Yearly billing
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="flex justify-center">
            <section className="grid grid-cols-2 grid-rows-2 gap-6 w-[650px]">
              {pricingPlans.map((plan) => (
                <div 
                  key={plan.name} 
                  className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-pink-500 transition-all w-[310px] h-[310px] flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                    <p className="text-white mb-6">{plan.description}</p>
                    <div className="text-left text-5xl font-bold mb-4 text-white">
                      {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      {billingCycle === 'monthly' && plan.monthlyPrice !== 'Custom' && <span className="text-base text-white">/month</span>}
                      {billingCycle === 'yearly' && plan.yearlyPrice !== 'Custom' && <span className="text-base text-white">/year</span>}
                    </div>
                  </div>
                  <button className="w-full bg-white text-black text-sm font-bold py-3 rounded-md hover:bg-black hover:text-white hover:border hover:border-white transition-colors mt-2">
                    Subscribe
                  </button>
                </div>
              ))}
            </section>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          {/* 功能列表 */}
        </section>

        {/* Brought to You By Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-xl font-bold text-white mb-8">Brought to You By</h2>
            <div className="flex justify-center items-center space-x-12">
              <div className="grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src="/logos/logo1.svg" 
                  alt="Partner Logo 1" 
                  className="h-12 w-auto"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src="/logos/logo2.svg" 
                  alt="Partner Logo 2" 
                  className="h-12 w-auto"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src="/logos/logo3.svg" 
                  alt="Partner Logo 3" 
                  className="h-12 w-auto"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src="/logos/logo4.svg" 
                  alt="Partner Logo 4" 
                  className="h-12 w-auto"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src="/logos/logo5.svg" 
                  alt="Partner Logo 5" 
                  className="h-12 w-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16 max-w-4xl mx-auto">
          {/* 常见问题 */}
        </section>

        {/* CTA Section */}
        <section className="text-center py-16">
          {/* 行动号召 */}
        </section>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Terms</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}