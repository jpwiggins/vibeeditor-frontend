import React, { useState } from 'react';

function DemoVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayDemo = () => {
    setIsPlaying(true);
    // In a real implementation, you would load and play an actual demo video
    alert('🎬 Demo video would play here!\n\nThis would show a real example of:\n• Uploading a raw video\n• Entering an AI prompt\n• Watching the AI edit in real-time\n• Downloading the final result');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See VibeEditorAI in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how our AI transforms raw footage into professional content in just minutes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Demo Video Container */}
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
              {!isPlaying ? (
                <div className="text-center">
                  <button
                    onClick={handlePlayDemo}
                    className="group relative inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-300 transform hover:scale-110"
                  >
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                  <p className="text-white mt-4 text-lg font-semibold">
                    Watch 2-Minute Demo
                  </p>
                  <p className="text-blue-200 mt-2">
                    See real AI video editing in action
                  </p>
                </div>
              ) : (
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🎬</div>
                  <p className="text-xl">Demo video playing...</p>
                  <p className="text-blue-200 mt-2">This would be your actual demo video</p>
                </div>
              )}
            </div>
          </div>

          {/* Demo Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📹</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Raw Footage Upload
              </h3>
              <p className="text-gray-600 text-sm">
                See how easy it is to upload your raw video files
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                AI Processing
              </h3>
              <p className="text-gray-600 text-sm">
                Watch our AI understand and execute your editing instructions
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Professional Result
              </h3>
              <p className="text-gray-600 text-sm">
                Get a polished, ready-to-share video in minutes
              </p>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
            <blockquote className="text-xl text-gray-700 mb-4 italic">
              "I went from spending 4 hours editing a single video to getting professional results in 10 minutes. This is a game-changer for content creators."
            </blockquote>
            <div className="text-gray-600">
              <p className="font-semibold">Sarah Chen</p>
              <p className="text-sm">YouTube Creator, 500K subscribers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DemoVideo;