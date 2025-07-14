# VibeEditorAI Frontend Information

## Summary
A modern React frontend for the VibeEditorAI video editing SaaS platform. The application provides a landing page, authentication, Stripe payment integration, and a dashboard for AI-powered video editing.

## Structure
- **src/**: Main source code with React components and contexts
- **components/**: Alternative component files (possibly legacy)
- **contexts/**: Alternative context files (possibly legacy)
- **public/**: Static assets and redirect configuration
- **.vscode/**: Editor configuration
- **.zencoder/**: Documentation directory

## Language & Runtime
**Language**: JavaScript (React)
**Version**: React 19
**Build System**: Vite 7.0.4
**Package Manager**: npm
**Node Version**: >=16.0.0 (20.19.0 for Netlify)

## Dependencies
**Main Dependencies**:
- react: ^19.1.0
- react-dom: ^19.1.0
- react-router-dom: ^6.28.0
- @stripe/stripe-js: ^7.4.0
- react-select: ^5.10.2

**Development Dependencies**:
- @vitejs/plugin-react: latest
- tailwindcss: ^3.4.17
- eslint: 9.29.0
- vite: 7.0.4
- postcss: ^8.5.6
- autoprefixer: ^10.4.21

## Build & Installation
```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment
**Platform**: Netlify
**Configuration**: netlify.toml
**Build Command**: npm run build
**Publish Directory**: dist
**Node Version**: 20.19.0
**API Proxy**: Redirects /api/* to https://web-synce-environment.up.railway.app/api/

## Environment Variables
**Required**:
- REACT_APP_STRIPE_PUBLISHABLE_KEY: Stripe publishable key

**Optional**:
- REACT_APP_API_URL: API endpoint (default: https://web-synce-environment.up.railway.app)

## Features
- Landing page with hero section, features, and pricing
- Authentication with login/signup flow
- Stripe integration for subscription payments
- Responsive design with Tailwind CSS
- Video dashboard for uploading and editing videos
- AI-powered video editing with prompt-based instructions
- Audio integration with music upload and syncing