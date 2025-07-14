import React from 'react';

function Features() {
  const features = [
    {
      icon: '🤖',
      title: 'Prompt-Powered Video Editing',
      description: 'Simply describe what you want and our AI will edit your video automatically. No complex timeline editing required.'
    },
    {
      icon: '📝',
      title: 'Automatic Subtitle Generation',
      description: 'AI-powered speech recognition generates accurate subtitles in multiple languages, perfectly synced to your video.'
    },
    {
      icon: '🎵',
      title: 'Audio Syncing & Music Remixing',
      description: 'Intelligent audio processing that syncs background music, adjusts levels, and creates seamless audio experiences.'
    },
    {
      icon: '🎬',
      title: 'Cut to Beat + Transitions',
      description: 'Automatically cut your video to match the rhythm of your music with smooth, professional transitions.'
    },
    {
      icon: '⚡',
      title: 'Clean, Fast, Professional Output',
      description: 'Export high-quality videos optimized for any platform - YouTube, TikTok, Instagram, and more.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful AI Video Editing Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your raw footage into professional videos with our cutting-edge AI technology. 
            No experience required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional feature highlights */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose VibeEditorAI?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl mb-2">🚀</div>
                <h4 className="font-semibold text-gray-900 mb-2">10x Faster</h4>
                <p className="text-gray-600 text-sm">Edit videos in minutes, not hours</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-semibold text-gray-900 mb-2">AI-Powered</h4>
                <p className="text-gray-600 text-sm">Advanced machine learning algorithms</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📱</div>
                <h4 className="font-semibold text-gray-900 mb-2">Multi-Platform</h4>
                <p className="text-gray-600 text-sm">Optimized for all social media</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;