import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const sectionStyles = {
  marginBottom: 28,
};
const buttonStyles = {
  background: '#3b82f6',
  color: '#fff',
  border: 'none',
  borderRadius: 6,
  padding: '8px 20px',
  fontSize: 15,
  fontWeight: 500,
  cursor: 'pointer',
  marginBottom: 16,
  marginRight: 10,
};
const uploadAreaStyles = {
  border: '2px dashed #3b82f6',
  borderRadius: 8,
  padding: '2rem',
  textAlign: 'center',
  background: '#f8fafc',
  marginBottom: '1rem',
};

function Dashboard() {
  const { user, logout } = useAuth();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [processing, setProcessing] = useState(false);
  const [processedVideos, setProcessedVideos] = useState([]);

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('video/')) {
      setSelectedVideo(file);
    } else {
      alert('Please select a valid video file');
    }
  };

  const handleAudioUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('audio/')) {
      setSelectedAudio(file);
    } else {
      alert('Please select a valid audio file');
    }
  };

  const processVideo = async () => {
    if (!selectedVideo || !prompt.trim()) {
      alert('Please upload a video and enter a prompt');
      return;
    }

    setProcessing(true);
    
    try {
      const formData = new FormData();
      formData.append('file', selectedVideo);
      if (selectedAudio) {
        formData.append('music', selectedAudio);
      }
      formData.append('prompt', prompt);

      // Upload to your backend API
      const uploadUrl = 'https://vibe-editor.onrender.com/api/v1/upload';
      const response = await fetch(uploadUrl, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const result = await response.json();
      
      // Start polling for task status
      pollTaskStatus(result.taskId);
      
    } catch (error) {
      console.error('Upload Error:', error);
      alert(`❌ Upload Failed: ${error.message}`);
      setProcessing(false);
    }
  };

  const pollTaskStatus = async (taskId) => {
    const statusUrl = `https://vibe-editor.onrender.com/api/v1/tasks/${taskId}`;
    
    const pollInterval = setInterval(async () => {
      try {
        const response = await fetch(statusUrl);
        if (!response.ok) {
          throw new Error(`Status check failed: ${response.statusText}`);
        }

        const task = await response.json();

        switch (task.status) {
          case 'PENDING':
            // Still waiting
            break;
          case 'PROCESSING':
            // Still processing
            break;
          case 'SUCCESS':
            clearInterval(pollInterval);
            const videoUrl = `https://vibe-editor.onrender.com/${task.result}`;
            const newProcessedVideo = {
              id: taskId,
              originalName: selectedVideo.name,
              prompt: prompt,
              status: 'completed',
              downloadUrl: videoUrl,
              createdAt: new Date().toLocaleString()
            };
            
            setProcessedVideos([...processedVideos, newProcessedVideo]);
            setProcessing(false);
            setSelectedVideo(null);
            setSelectedAudio(null);
            setPrompt('');
            
            alert('✅ Video processed successfully! Ready for download.');
            break;
          case 'FAILURE':
            clearInterval(pollInterval);
            const errorInfo = task.error || 'Unknown error';
            alert(`❌ Processing Failed: ${errorInfo}`);
            setProcessing(false);
            break;
        }
      } catch (error) {
        clearInterval(pollInterval);
        console.error('Polling Error:', error);
        alert('Could not retrieve task status.');
        setProcessing(false);
      }
    }, 3000); // Poll every 3 seconds
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', padding: '1rem', background: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div>
          <h1 style={{ color: '#3b82f6', margin: 0 }}>🎬 VibeEditor Dashboard</h1>
          <p style={{ margin: '0.5rem 0 0 0', color: '#64748b' }}>Welcome back, {user?.username}!</p>
        </div>
        <button onClick={logout} style={{ ...buttonStyles, background: '#ef4444' }}>
          Sign Out
        </button>
      </div>

      {/* Upload Section */}
      <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
        <h2 style={{ color: '#1f2937', marginBottom: '1rem' }}>📤 Upload & Process Video</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          {/* Video Upload */}
          <div>
            <h3 style={{ marginBottom: '1rem', color: '#374151' }}>Video File</h3>
            <div style={uploadAreaStyles}>
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoUpload}
                style={{ display: 'none' }}
                id="video-upload"
              />
              <label htmlFor="video-upload" style={{ cursor: 'pointer' }}>
                {selectedVideo ? (
                  <div>
                    <p style={{ color: '#10b981', fontWeight: 'bold' }}>✅ {selectedVideo.name}</p>
                    <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Click to change</p>
                  </div>
                ) : (
                  <div>
                    <p style={{ color: '#3b82f6', fontWeight: 'bold' }}>📹 Click to upload video</p>
                    <p style={{ color: '#64748b', fontSize: '0.9rem' }}>MP4, MOV, AVI supported</p>
                  </div>
                )}
              </label>
            </div>
          </div>

          {/* Audio Upload (Optional) */}
          <div>
            <h3 style={{ marginBottom: '1rem', color: '#374151' }}>Audio File (Optional)</h3>
            <div style={uploadAreaStyles}>
              <input
                type="file"
                accept="audio/*"
                onChange={handleAudioUpload}
                style={{ display: 'none' }}
                id="audio-upload"
              />
              <label htmlFor="audio-upload" style={{ cursor: 'pointer' }}>
                {selectedAudio ? (
                  <div>
                    <p style={{ color: '#10b981', fontWeight: 'bold' }}>✅ {selectedAudio.name}</p>
                    <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Click to change</p>
                  </div>
                ) : (
                  <div>
                    <p style={{ color: '#3b82f6', fontWeight: 'bold' }}>🎵 Click to upload audio</p>
                    <p style={{ color: '#64748b', fontSize: '0.9rem' }}>MP3, WAV, AAC supported</p>
                  </div>
                )}
              </label>
            </div>
          </div>
        </div>

        {/* AI Prompt */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: '#374151' }}>🤖 AI Editing Prompt</h3>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe how you want your video edited. For example: 'Create a 30-second highlight reel with upbeat music, add captions, and optimize for TikTok vertical format'"
            style={{
              width: '100%',
              minHeight: '120px',
              padding: '1rem',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '16px',
              resize: 'vertical'
            }}
          />
        </div>

        <button
          onClick={processVideo}
          disabled={processing || !selectedVideo || !prompt.trim()}
          style={{
            ...buttonStyles,
            background: processing ? '#9ca3af' : '#10b981',
            padding: '12px 24px',
            fontSize: '16px',
            cursor: processing ? 'not-allowed' : 'pointer'
          }}
        >
          {processing ? '⏳ Processing Video...' : '🚀 Process Video'}
        </button>
      </div>

      {/* Processed Videos */}
      <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#1f2937', marginBottom: '1rem' }}>📁 Your Processed Videos</h2>
        
        {processedVideos.length === 0 ? (
          <p style={{ color: '#64748b', textAlign: 'center', padding: '2rem' }}>
            No processed videos yet. Upload a video and add a prompt to get started!
          </p>
        ) : (
          <div style={{ listStyle: 'none', padding: 0 }}>
            {processedVideos.map((video) => (
              <div key={video.id} style={{
                background: '#f1f5f9',
                borderRadius: 8,
                marginBottom: 10,
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>
                    📹 {video.originalName}
                  </h4>
                  <p style={{ margin: '0 0 0.5rem 0', color: '#64748b', fontSize: '0.9rem' }}>
                    <strong>Prompt:</strong> {video.prompt}
                  </p>
                  <p style={{ margin: 0, color: '#64748b', fontSize: '0.8rem' }}>
                    Processed: {video.createdAt}
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{
                    background: '#10b981',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '1rem',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>
                    ✅ Ready
                  </span>
                  <a
                    href={video.downloadUrl}
                    download
                    style={{
                      ...buttonStyles,
                      background: '#3b82f6',
                      margin: 0,
                      padding: '0.5rem 1rem',
                      fontSize: '0.9rem',
                      textDecoration: 'none',
                      display: 'inline-block'
                    }}
                  >
                    📥 Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Processing Status */}
      {processing && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          textAlign: 'center',
          zIndex: 1000
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⏳</div>
          <h3 style={{ color: '#1f2937', marginBottom: '0.5rem' }}>Processing Your Video</h3>
          <p style={{ color: '#64748b' }}>This may take a few moments...</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;