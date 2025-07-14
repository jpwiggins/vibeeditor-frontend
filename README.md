# VibeEditorAI Frontend

A modern React frontend for the VibeEditorAI video editing SaaS platform.

## Features

- 🎬 **Modern Landing Page** - Clean, professional design with hero section, features, and pricing
- 🔐 **Authentication** - Secure login/signup flow with Stripe integration
- 💳 **Stripe Checkout** - Integrated subscription payments ($29/month, $279/year)
- 📱 **Responsive Design** - Mobile-friendly with Tailwind CSS
- 🎥 **Video Dashboard** - Upload videos, add prompts, preview content
- ⚡ **AI-Powered Editing** - Prompt-based video editing with real-time processing
- 🎵 **Audio Integration** - Optional music upload and syncing

## Tech Stack

- **React 19** - Latest React with modern hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Stripe** - Payment processing and subscriptions
- **React Router** - Client-side routing

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your Stripe publishable key:
   ```
   REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## Project Structure

```
src/
├── components/
│   ├── AuthPage.jsx          # Login/signup page
│   ├── Dashboard.jsx         # Main dashboard after login
│   ├── Features.jsx          # Features section component
│   ├── LandingPage.jsx       # Main landing page
│   ├── LoginButton.jsx       # Reusable login button
│   ├── Navbar.jsx           # Navigation component
│   └── PricingSection.jsx    # Pricing cards with Stripe
├── contexts/
│   └── AuthContext.jsx      # Authentication context
├── App.jsx                  # Main app component
└── App.css                  # Global styles
```

## Stripe Integration

The pricing section uses your actual Stripe price IDs:
- **Monthly**: `price_1RdBBDBlupvf8JxwGStB88zp`
- **Yearly**: `price_1RdBBDBlupvf8JxwGStB88zp`

Make sure to:
1. Replace the placeholder Stripe publishable key in `.env`
2. Set up your Stripe webhook endpoints for subscription events
3. Configure success/cancel URLs in your Stripe dashboard

## Features Included

### Landing Page
- ✅ Hero section with "Edit Smarter. Faster. With AI." CTA
- ✅ Features section highlighting core capabilities
- ✅ Pricing section with Stripe Checkout integration
- ✅ Responsive navigation with login button
- ✅ Professional design similar to Notion/Framer

### Dashboard
- ✅ Video upload with preview player
- ✅ Optional music file upload
- ✅ AI prompt input for editing instructions
- ✅ Real-time processing status
- ✅ Download processed videos

### Core Features Highlighted
- 🤖 Prompt-powered video editing
- 📝 Automatic subtitle generation
- 🎵 Audio syncing & music remixing
- 🎬 Cut to beat + transitions
- ⚡ Clean, fast, professional output

## Deployment

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Preview production build**
   ```bash
   npm run preview
   ```

3. **Deploy to Netlify/Vercel**
   - Connect your Git repository
   - Set environment variables
   - Deploy automatically on push

## Environment Variables

```bash
# Required
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here

# Optional
REACT_APP_API_URL=https://web-synce-environment.up.railway.app
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.
