import React from 'react';
import { useEditor } from '../../contexts/EditorContext';

function MusicUploader() {
  const { uploadedMusic, uploadMusic, error } = useEditor();

  const handleMusicUpload = (event) => {
    const file = event.target.files[0];
    uploadMusic(file);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">🎵 Upload Music (Optional)</h3>
      
      <div className="border-2 border-dashed border-purple-300 rounded-lg p-8 text-center hover:border-purple-400 transition-colors">
        <input
          type="file"
          accept="audio/*"
          onChange={handleMusicUpload}
          className="hidden"
          id="music-upload"
        />
        <label htmlFor="music-upload" className="cursor-pointer">
          {uploadedMusic ? (
            <div>
              <div className="text-4xl mb-3">✅</div>
              <p className="text-green-600 font-semibold mb-2">{uploadedMusic.name}</p>
              <p className="text-gray-500 text-sm">Click to change music</p>
            </div>
          ) : (
            <div>
              <div className="text-4xl mb-3">🎵</div>
              <p className="text-purple-600 font-semibold mb-2">Click to upload music</p>
              <p className="text-gray-500 text-sm">MP3, WAV, AAC supported</p>
            </div>
          )}
        </label>
      </div>

      {uploadedMusic && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Preview</h4>
          <audio
            controls
            className="w-full"
            src={URL.createObjectURL(uploadedMusic)}
          />
        </div>
      )}
    </div>
  );
}

export default MusicUploader;