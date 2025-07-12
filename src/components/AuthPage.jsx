import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe (replace with your publishable key)
const stripePromise = loadStripe('pk_test_your_stripe_publishable_key_here');

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: 18,
  maxWidth: '400px',
  margin: '0 auto',
  padding: '2rem',
  background: 'white',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
};

const labelStyles = {
  fontWeight: 500,
  marginBottom: 6,
  color: '#374151'
};

const inputStyles = {
  padding: '12px 16px',
  borderRadius: 6,
  border: '1px solid #d1d5db',
  fontSize: 16,
  transition: 'border-color 0.2s'
};

const buttonStyles = {
  background: '#3b82f6',
  color: '#fff',
  border: 'none',
  borderRadius: 6,
  padding: '12px 0',
  fontSize: 16,
  fontWeight: 600,
  cursor: 'pointer',
  marginTop: 10,
  transition: 'background-color 0.2s'
};

function AuthPage() {
  const { login } = useAuth();
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleStripeCheckout = async (plan) => {
    setLoading(true);
    try {
      const stripe = await stripePromise;
      
      // In a real app, you would call your backend to create a checkout session
      // For demo purposes, we'll simulate the flow
      setTimeout(() => {
        alert(`🎉 Welcome to VibeEditor!\n\nPlan: ${plan === 'monthly' ? 'Monthly ($29/month)' : 'Yearly ($279/year)'}\n\nYour account has been created successfully!\nYou can now start editing videos with AI.`);
        
        // Simulate successful authentication
        login(formData.email, 'stripe_customer_id_123');
        setLoading(false);
      }, 2000);
      
    } catch (error) {
      console.error('Stripe error:', error);
      alert('Payment failed. Please try again.');
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isSignUp) {
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      if (formData.password.length < 6) {
        alert('Password must be at least 6 characters');
        return;
      }
    }

    if (isSignUp) {
      // For sign up, proceed to Stripe checkout
      handleStripeCheckout(selectedPlan);
    } else {
      // For sign in, authenticate directly (in real app, verify credentials)
      login(formData.email, 'existing_user_id');
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{ width: '100%', maxWidth: '500px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '0.5rem' }}>
            🎬 VibeEditor
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>
            {isSignUp ? 'Start your video editing journey' : 'Welcome back!'}
          </p>
        </div>

        <form onSubmit={handleSubmit} style={formStyles}>
          <h2 style={{ textAlign: 'center', color: '#1f2937', marginBottom: '1rem' }}>
            {isSignUp ? 'Create Account' : 'Sign In'}
          </h2>

          <div>
            <label style={labelStyles}>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={inputStyles}
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label style={labelStyles}>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              style={inputStyles}
              placeholder="Enter your password"
              minLength={6}
            />
          </div>

          {isSignUp && (
            <>
              <div>
                <label style={labelStyles}>Confirm Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  style={inputStyles}
                  placeholder="Confirm your password"
                />
              </div>

              <div style={{ marginTop: '1rem' }}>
                <label style={labelStyles}>Choose Your Plan:</label>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                  <label style={{ 
                    flex: 1, 
                    padding: '1rem', 
                    border: selectedPlan === 'monthly' ? '2px solid #3b82f6' : '1px solid #d1d5db',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    background: selectedPlan === 'monthly' ? '#eff6ff' : '#f9fafb'
                  }}>
                    <input
                      type="radio"
                      name="plan"
                      value="monthly"
                      checked={selectedPlan === 'monthly'}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                      style={{ marginRight: '0.5rem' }}
                    />
                    <div>
                      <strong>Monthly</strong>
                      <div style={{ color: '#3b82f6', fontWeight: 'bold' }}>$29/month</div>
                    </div>
                  </label>
                  
                  <label style={{ 
                    flex: 1, 
                    padding: '1rem', 
                    border: selectedPlan === 'yearly' ? '2px solid #3b82f6' : '1px solid #d1d5db',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    background: selectedPlan === 'yearly' ? '#eff6ff' : '#f9fafb',
                    position: 'relative'
                  }}>
                    <input
                      type="radio"
                      name="plan"
                      value="yearly"
                      checked={selectedPlan === 'yearly'}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                      style={{ marginRight: '0.5rem' }}
                    />
                    <div>
                      <strong>Yearly</strong>
                      <div style={{ color: '#3b82f6', fontWeight: 'bold' }}>$279/year</div>
                      <div style={{ 
                        position: 'absolute', 
                        top: '-8px', 
                        right: '8px', 
                        background: '#10b981', 
                        color: 'white', 
                        padding: '2px 8px', 
                        borderRadius: '12px', 
                        fontSize: '0.75rem',
                        fontWeight: 'bold'
                      }}>
                        Save 20%
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </>
          )}

          <button 
            type="submit" 
            disabled={loading}
            style={{
              ...buttonStyles,
              background: loading ? '#9ca3af' : (isSignUp ? '#10b981' : '#3b82f6'),
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? '⏳ Processing...' : (isSignUp ? '🚀 Start Subscription' : '🔑 Sign In')}
          </button>

          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              style={{
                background: 'none',
                border: 'none',
                color: '#3b82f6',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
            </button>
          </div>

          {isSignUp && (
            <div style={{ 
              fontSize: '0.8rem', 
              color: '#64748b', 
              textAlign: 'center',
              marginTop: '1rem',
              padding: '1rem',
              background: '#f8fafc',
              borderRadius: '6px'
            }}>
              🔒 Secure payment powered by Stripe<br/>
              ✅ Cancel anytime • 💳 All major cards accepted<br/>
              📧 You'll receive a confirmation email after signup
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default AuthPage;