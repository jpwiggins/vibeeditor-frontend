import React from 'react';

function Hero({ onSignIn }) {
  return (
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
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
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

          {/* Trust Indicators */}
          <div className="text-blue-200 mb-12">
            <p>✨ No credit card required • 7-day free trial • Cancel anytime</p>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="text-lg font-semibold mb-2">AI-Powered</h3>
              <p className="text-blue-200 text-sm">Advanced machine learning for professional results</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-blue-200 text-sm">Edit videos in minutes, not hours</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="text-lg font-semibold mb-2">Multi-Platform</h3>
              <p className="text-blue-200 text-sm">Optimized for all social media platforms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;