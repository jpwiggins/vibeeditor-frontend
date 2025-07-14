import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { EditorProvider } from '../contexts/EditorContext';
import VideoUploader from './editor/VideoUploader';
import MusicUploader from './editor/MusicUploader';
import PromptInput from './editor/PromptInput';
import VideoPreview from './editor/VideoPreview';

function Dashboard() {
  const { user, logout, clearAllData } = useAuth();

  return (
    <EditorProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div>
                <h1 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
                  <span className="text-3xl">🎬</span>
                  <span>VibeEditor Dashboard</span>
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-600">
                  Welcome, {user?.username}!
                </span>
                <button
                  onClick={logout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
                >
                  Sign Out
                </button>
                <button 
                  onClick={clearAllData} 
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
                  title="Reset to landing page (dev helper)"
                >
                  🔄 Reset
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Upload and Input */}
            <div className="space-y-6">
              <VideoUploader />
              <MusicUploader />
              <PromptInput />
            </div>

            {/* Right Column - Preview and Results */}
            <div>
              <VideoPreview />
            </div>
          </div>
        </div>
      </div>
    </EditorProvider>
  );
}

export default Dashboard;