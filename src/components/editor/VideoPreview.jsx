import React from 'react';
import { useEditor } from '../../contexts/EditorContext';

function VideoPreview() {
  const { processedVideos, loading, error } = useEditor();

  if (loading) {
    return (
      <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 text-center">
        <div className="animate-pulse">
          <div className="text-6xl mb-4">⏳</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Processing Your Video</h3>
          <p className="text-gray-600">Our AI is working its magic. This may take a few moments...</p>
          <div className="mt-4 bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg p-8 shadow-sm border border-red-200 text-center">
        <div className="text-6xl mb-4">❌</div>
        <h3 className="text-lg font-semibold text-red-900 mb-2">Processing Failed</h3>
        <p className="text-red-600">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">📁 Your Processed Videos</h3>
      
      {processedVideos.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎬</div>
          <h4 className="text-lg font-medium text-gray-900 mb-2">No videos yet</h4>
          <p className="text-gray-600">
            Upload a video and add a prompt to get started with AI editing!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {processedVideos.map((video) => (
            <div key={video.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    📹 {video.originalName}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Prompt:</strong> {video.prompt}
                  </p>
                  <p className="text-xs text-gray-500">
                    Processed: {video.createdAt}
                  </p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    ✅ Ready
                  </span>
                  <a
                    href={video.downloadUrl}
                    download
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    📥 Download
                  </a>
                </div>
              </div>
              
              {/* Video Preview */}
              <div className="mt-4">
                <video
                  controls
                  className="w-full max-h-64 rounded-lg border border-gray-200"
                  src={video.downloadUrl}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default VideoPreview;