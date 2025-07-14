import React from 'react';
import { useEditor } from '../../contexts/EditorContext';

function PromptInput() {
  const { prompt, updatePrompt, generateVideo, loading, uploadedVideo } = useEditor();

  const handleSubmit = (e) => {
    e.preventDefault();
    generateVideo();
  };

  const promptExamples = [
    "Create a 30-second highlight reel with upbeat music and captions",
    "Add smooth transitions and optimize for TikTok vertical format",
    "Cut to the beat of the music with dynamic transitions",
    "Create an Instagram story version with text overlays",
    "Make a professional YouTube intro with fade effects"
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">🤖 AI Editing Instructions</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
            Describe how you want your video edited:
          </label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => updatePrompt(e.target.value)}
            placeholder="Describe your vision in detail. For example: 'Create a 30-second highlight reel with upbeat music, add captions, and optimize for TikTok vertical format'"
            className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
            required
          />
          <p className="text-sm text-gray-500 mt-2">
            Be specific about timing, style, platform, and any special effects you want.
          </p>
        </div>

        {/* Example Prompts */}
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 mb-3">💡 Example prompts:</p>
          <div className="space-y-2">
            {promptExamples.map((example, index) => (
              <button
                key={index}
                type="button"
                onClick={() => updatePrompt(example)}
                className="block w-full text-left p-3 text-sm bg-gray-50 hover:bg-blue-50 border border-gray-200 rounded-lg transition-colors"
              >
                "{example}"
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || !uploadedVideo || !prompt.trim()}
          className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
            loading || !uploadedVideo || !prompt.trim()
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700 shadow-md hover:shadow-lg'
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing Video...
            </span>
          ) : (
            '🚀 Generate Video'
          )}
        </button>
      </form>
    </div>
  );
}

export default PromptInput;