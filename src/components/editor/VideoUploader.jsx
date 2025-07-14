import React from 'react';
import { useEditor } from '../../contexts/EditorContext';

function VideoUploader() {
  const { uploadedVideo, uploadVideo, error } = useEditor();

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    uploadVideo(file);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">📹 Upload Video</h3>
      
      <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoUpload}
          className="hidden"
          id="video-upload"
        />
        <label htmlFor="video-upload" className="cursor-pointer">
          {uploadedVideo ? (
            <div>
              <div className="text-4xl mb-3">✅</div>
              <p className="text-green-600 font-semibold mb-2">{uploadedVideo.name}</p>
              <p className="text-gray-500 text-sm">Click to change video</p>
            </div>
          ) : (
            <div>
              <div className="text-4xl mb-3">📹</div>
              <p className="text-blue-600 font-semibold mb-2">Click to upload video</p>
              <p className="text-gray-500 text-sm">MP4, MOV, AVI supported</p>
            </div>
          )}
        </label>
      </div>

      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}

      {uploadedVideo && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Preview</h4>
          <video
            controls
            className="w-full max-h-48 rounded-lg border border-gray-200"
            src={URL.createObjectURL(uploadedVideo)}
          />
        </div>
      )}
    </div>
  );
}

export default VideoUploader;