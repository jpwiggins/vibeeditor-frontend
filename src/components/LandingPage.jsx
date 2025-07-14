import React from 'react';
import Navbar from './Navbar';
import Features from './Features';
import PricingSection from './PricingSection';

function LandingPage({ onSignIn }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar onSignIn={onSignIn} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Edit Smarter. Faster. <br />
              <span className="text-yellow-300">With AI.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Transform your raw footage into professional videos in minutes. 
              Upload, prompt, and get ready-to-post content for YouTube, TikTok, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={onSignIn}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Free Trial
              </button>
              <a 
                href="#features" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200"
              >
                Learn More
              </a>
            </div>
            <div className="mt-8 text-blue-200">
              <p>✨ No credit card required • 7-day free trial</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How VibeEditorAI Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get professional video content in just 4 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Sign Up & Subscribe',
                description: 'Choose your plan and get instant access to our AI video editing platform.'
              },
              {
                step: '2',
                title: 'Upload Content',
                description: 'Upload your video and optional music files. All major formats supported.'
              },
              {
                step: '3',
                title: 'AI Prompt',
                description: 'Describe your vision in plain English. Our AI understands complex editing requests.'
              },
              {
                step: '4',
                title: 'Download & Share',
                description: 'Get your professionally edited video optimized for any social platform.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <span className="text-3xl mr-2">🎬</span>
              <span className="text-2xl font-bold">VibeEditorAI</span>
            </div>
            <p className="text-gray-400 mb-8">
              The future of video editing is here. Create professional content with the power of AI.
            </p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
                &copy; 2024 VibeEditorAI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;