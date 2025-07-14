import React from 'react';

function HowItWorks() {
  const steps = [
    {
      step: '1',
      title: 'Sign Up & Subscribe',
      description: 'Choose your plan and get instant access to our AI video editing platform.',
      icon: '🚀'
    },
    {
      step: '2',
      title: 'Upload Content',
      description: 'Upload your video and optional music files. All major formats supported.',
      icon: '📤'
    },
    {
      step: '3',
      title: 'AI Prompt',
      description: 'Describe your vision in plain English. Our AI understands complex editing requests.',
      icon: '🤖'
    },
    {
      step: '4',
      title: 'Download & Share',
      description: 'Get your professionally edited video optimized for any social platform.',
      icon: '📥'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
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
          {steps.map((item, index) => (
            <div key={index} className="text-center relative">
              {/* Step Number */}
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 relative z-10">
                {item.step}
              </div>
              
              {/* Connecting Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-200 transform translate-x-8 z-0"></div>
              )}

              {/* Icon */}
              <div className="text-4xl mb-4">{item.icon}</div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              What Makes Our AI Special?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🧠</div>
                <h4 className="font-semibold text-gray-900 mb-2">Smart Understanding</h4>
                <p className="text-gray-600 text-sm">Our AI understands context, emotion, and storytelling</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-semibold text-gray-900 mb-2">Precision Editing</h4>
                <p className="text-gray-600 text-sm">Frame-perfect cuts and transitions every time</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🔄</div>
                <h4 className="font-semibold text-gray-900 mb-2">Continuous Learning</h4>
                <p className="text-gray-600 text-sm">Gets better with every video you create</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;