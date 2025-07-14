import React from 'react';
import Layout from './layout/Layout';
import Hero from './marketing/Hero';
import Features from './Features';
import HowItWorks from './marketing/HowItWorks';
import DemoVideo from './marketing/DemoVideo';
import PricingSection from './PricingSection';

function LandingPage({ onSignIn }) {
  return (
    <Layout onSignIn={onSignIn}>
      {/* Hero Section */}
      <Hero onSignIn={onSignIn} />

      {/* Features Section */}
      <Features />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Demo Video Section */}
      <DemoVideo />

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Video Content?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of creators who are already using AI to make better videos faster.
          </p>
          <button 
            onClick={onSignIn}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started Now
          </button>
        </div>
      </section>
    </Layout>
  );
}

export default LandingPage;