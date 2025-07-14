import React, { createContext, useState, useContext } from 'react';

const EditorContext = createContext();

export function EditorProvider({ children }) {
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [uploadedMusic, setUploadedMusic] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [generatedVideo, setGeneratedVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [processedVideos, setProcessedVideos] = useState([]);

  const uploadVideo = (file) => {
    if (file && file.type.startsWith('video/')) {
      setUploadedVideo(file);
      setError(null);
      return true;
    } else {
      setError('Please select a valid video file');
      return false;
    }
  };

  const uploadMusic = (file) => {
    if (file && file.type.startsWith('audio/')) {
      setUploadedMusic(file);
      setError(null);
      return true;
    } else {
      setError('Please select a valid audio file');
      return false;
    }
  };

  const updatePrompt = (text) => {
    setPrompt(text);
  };

  const generateVideo = async () => {
    if (!uploadedVideo || !prompt.trim()) {
      setError('Please upload a video and enter a prompt');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file', uploadedVideo);
      if (uploadedMusic) {
        formData.append('music', uploadedMusic);
      }
      formData.append('prompt', prompt);

      // Call the backend API
      const uploadUrl = "https://web-synce-environment.up.railway.app/api/v1/upload";
      const response = await fetch(uploadUrl, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const result = await response.json();
      
      // Start polling for task status
      await pollTaskStatus(result.taskId);
      
    } catch (error) {
      console.error('Upload Error:', error);
      setError(`Upload Failed: ${error.message}`);
      setLoading(false);
    }
  };

  const pollTaskStatus = async (taskId) => {
    const statusUrl = `https://web-synce-environment.up.railway.app/api/v1/tasks/${taskId}`;
    
    const pollInterval = setInterval(async () => {
      try {
        const response = await fetch(statusUrl);
        if (!response.ok) {
          throw new Error(`Status check failed: ${response.statusText}`);
        }

        const task = await response.json();

        switch (task.status) {
          case 'PENDING':
          case 'PROCESSING':
            // Still processing
            break;
          case 'SUCCESS':
            clearInterval(pollInterval);
            const videoUrl = `https://web-synce-environment.up.railway.app/${task.result}`;
            const newProcessedVideo = {
              id: taskId,
              originalName: uploadedVideo.name,
              prompt: prompt,
              status: 'completed',
              downloadUrl: videoUrl,
              createdAt: new Date().toLocaleString()
            };
            
            setProcessedVideos(prevVideos => [...prevVideos, newProcessedVideo]);
            setGeneratedVideo(videoUrl);
            setLoading(false);
            
            // Reset form
            setUploadedVideo(null);
            setUploadedMusic(null);
            setPrompt('');
            break;
          case 'FAILURE':
            clearInterval(pollInterval);
            const errorInfo = task.error || 'Unknown error';
            setError(`Processing Failed: ${errorInfo}`);
            setLoading(false);
            break;
        }
      } catch (error) {
        clearInterval(pollInterval);
        console.error('Polling Error:', error);
        setError('Could not retrieve task status.');
        setLoading(false);
      }
    }, 3000); // Poll every 3 seconds
  };

  const clearError = () => {
    setError(null);
  };

  const resetEditor = () => {
    setUploadedVideo(null);
    setUploadedMusic(null);
    setPrompt('');
    setGeneratedVideo(null);
    setError(null);
    setLoading(false);
  };

  const value = {
    uploadedVideo,
    uploadedMusic,
    prompt,
    generatedVideo,
    loading,
    error,
    processedVideos,
    uploadVideo,
    uploadMusic,
    updatePrompt,
    generateVideo,
    clearError,
    resetEditor
  };

  return (
    <EditorContext.Provider value={value}>
      {children}
    </EditorContext.Provider>
  );
}

export function useEditor() {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error('useEditor must be used within an EditorProvider');
  }
  return context;
}