import React from 'react';

function LandingPage({ onSignIn }) {
  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; background-color: #f8fafc; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .header { background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding: 1rem 0; }
        .nav { display: flex; justify-content: space-between; align-items: center; }
        .logo { font-size: 1.5rem; font-weight: bold; color: #3b82f6; }
        .nav-links { display: flex; gap: 2rem; }
        .nav-links a { text-decoration: none; color: #64748b; font-weight: 500; }
        .nav-links a:hover { color: #3b82f6; }
        .btn { padding: 0.75rem 1.5rem; border: none; border-radius: 0.5rem; font-weight: 600; cursor: pointer; text-decoration: none; display: inline-block; transition: all 0.2s; }
        .btn-primary { background: #3b82f6; color: white; }
        .btn-primary:hover { background: #2563eb; }
        .btn-secondary { background: white; color: #3b82f6; border: 2px solid #3b82f6; }
        .btn-secondary:hover { background: #3b82f6; color: white; }
        .hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 4rem 0; text-align: center; }
        .hero h1 { font-size: 3rem; font-weight: bold; margin-bottom: 1rem; }
        .hero p { font-size: 1.25rem; margin-bottom: 2rem; opacity: 0.9; }
        .hero-buttons { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .features { padding: 4rem 0; background: white; }
        .section-title { text-align: center; font-size: 2.5rem; font-weight: bold; margin-bottom: 3rem; color: #1f2937; }
        .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
        .feature-card { background: #f8fafc; padding: 2rem; border-radius: 1rem; text-align: center; border: 1px solid #e2e8f0; }
        .feature-icon { width: 4rem; height: 4rem; background: #3b82f6; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-size: 1.5rem; }
        .feature-card h3 { font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem; color: #1f2937; }
        .feature-card p { color: #64748b; }
        .how-it-works { padding: 4rem 0; background: #f8fafc; }
        .steps-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; }
        .step { text-align: center; padding: 2rem; }
        .step-number { width: 3rem; height: 3rem; background: #3b82f6; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-weight: bold; font-size: 1.25rem; }
        .step h3 { font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem; color: #1f2937; }
        .step p { color: #64748b; }
        .pricing { padding: 4rem 0; background: #f8fafc; }
        .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 800px; margin: 0 auto; }
        .pricing-card { background: white; padding: 2rem; border-radius: 1rem; text-align: center; border: 2px solid #e2e8f0; position: relative; }
        .pricing-card.featured { border-color: #3b82f6; transform: scale(1.05); }
        .pricing-badge { position: absolute; top: -0.5rem; left: 50%; transform: translateX(-50%); background: #3b82f6; color: white; padding: 0.25rem 1rem; border-radius: 1rem; font-size: 0.875rem; font-weight: bold; }
        .pricing-card h3 { font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; }
        .pricing-price { font-size: 3rem; font-weight: bold; color: #3b82f6; margin-bottom: 1rem; }
        .pricing-price span { font-size: 1rem; color: #64748b; }
        .pricing-features { list-style: none; margin: 2rem 0; }
        .pricing-features li { padding: 0.5rem 0; color: #64748b; }
        .pricing-features li:before { content: "✓"; color: #10b981; font-weight: bold; margin-right: 0.5rem; }
        .footer { background: #1f2937; color: white; padding: 2rem 0; text-align: center; }
      `}</style>

      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo">🎬 VibeEditor</div>
            <div className="nav-links">
              <a href="#features">Features</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#pricing">Pricing</a>
            </div>
            <div>
              <button className="btn btn-primary" onClick={onSignIn}>Get Started</button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Edit Videos In Seconds</h1>
          <p>Upload a video and sound file, enter your prompt, and generate ready-to-post content for YouTube, TikTok, and more in seconds!</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" style={{ background: '#10b981' }} onClick={onSignIn}>Start Free Trial</button>
            <a href="#how-it-works" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">✅ Powerful AI Video Editing</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔐</div>
              <h3>Stripe Authentication</h3>
              <p>Secure sign up/sign in flow with Stripe subscription integration. Monthly ($29) and yearly ($279) plans.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Professional UI</h3>
              <p>Modern React frontend with clean, responsive design. User-friendly interface optimized for video editing workflows.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎬</div>
              <h3>AI Video Editing</h3>
              <p>Upload videos and audio files, then use AI prompts to automatically edit and generate content ready for social media.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Powered by FFmpeg for fast, reliable video processing. Generate edited videos in seconds, not minutes.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Complete Dashboard</h3>
              <p>Manage your videos, track processing status, and download finished content all from one powerful dashboard.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Multi-Platform Ready</h3>
              <p>Generate content optimized for YouTube, TikTok, Instagram, and other social media platforms automatically.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2 className="section-title">How VibeEditor Works</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Sign Up & Subscribe</h3>
              <p>Create account and choose your plan. Secure Stripe payment processing with monthly or yearly billing options.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Upload Content</h3>
              <p>Upload your video and audio files directly to the platform. Support for all major video and audio formats.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>AI Prompt</h3>
              <p>Enter your editing instructions using natural language. AI understands complex editing requests and preferences.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Download & Share</h3>
              <p>Get your professionally edited video ready for upload to YouTube, TikTok, Instagram, and more!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2 className="section-title">Simple Pricing</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Monthly Plan</h3>
              <div className="pricing-price">$29<span>/month</span></div>
              <ul className="pricing-features">
                <li>Unlimited video uploads</li>
                <li>AI-powered editing</li>
                <li>Multi-platform optimization</li>
                <li>HD video export</li>
                <li>Priority processing</li>
              </ul>
              <button className="btn btn-primary" onClick={onSignIn}>Start Monthly</button>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-badge">Save 20%</div>
              <h3>Yearly Plan</h3>
              <div className="pricing-price">$279<span>/year</span></div>
              <ul className="pricing-features">
                <li>Everything in Monthly</li>
                <li>4K video export</li>
                <li>Advanced AI features</li>
                <li>Custom branding</li>
                <li>Priority support</li>
              </ul>
              <button className="btn btn-primary" onClick={onSignIn}>Start Yearly</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 VibeEditor. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;