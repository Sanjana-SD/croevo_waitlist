import { useState } from 'react';
import RouteLink from '../components/RouteLink.jsx';

/**
 * =======================================================================
 * AUTHENTICATION INTEGRATION GUIDE
 * =======================================================================
 * 
 * To connect a live authentication provider:
 * 
 * 1. FIREBASE AUTHENTICATION:
 *    - Install `firebase`: npm install firebase
 *    - Initialize Firebase App and export `getAuth()`
 *    - Replace `handleSubmit` handler with:
 *      `await signInWithEmailAndPassword(auth, email, password)`
 * 
 * 2. SUPABASE AUTHENTICATION:
 *    - Install `@supabase/supabase-js`: npm install @supabase/supabase-js
 *    - Initialize Supabase Client
 *    - Replace `handleSubmit` handler with:
 *      `const { data, error } = await supabase.auth.signInWithPassword({ email, password })`
 * 
 * 3. CLERK / AUTH0 / CUSTOM JWT:
 *    - Call your authentication SDK's signIn endpoint inside `handleSubmit`.
 * 
 * Note: Never log user passwords or persist unencrypted credentials
 * to browser storage (localStorage/sessionStorage).
 */

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [authStatusMessage, setAuthStatusMessage] = useState(null);
  const [forgotModalOpen, setForgotModalOpen] = useState(false);

  // Email format regex
  const validateEmail = (val) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    setAuthStatusMessage(null);
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address (e.g. name@domain.com).';
    }

    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      // Simulate network latency for authentic UI feedback
      await new Promise((resolve) => setTimeout(resolve, 900));

      // Honest system status — No fake success or fake accounts
      setAuthStatusMessage({
        type: 'info',
        title: 'Authentication In Development',
        text: 'User accounts and portal login will go live with the official Croevo platform release on 15 October 2026. Please reserve your spot on the waitlist for early onboarding.'
      });
    } catch (err) {
      setAuthStatusMessage({
        type: 'error',
        title: 'Sign In Error',
        text: 'An unexpected error occurred. Please try again later.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page login-page">
      <div className="login-backdrop-glow" aria-hidden="true" />
      <div className="login-orbit" aria-hidden="true" />

      <section className="login-container section-shell">
        <div className="login-card reveal">
          <div className="login-brand">
            <RouteLink to="/" className="brand-mark" aria-label="Croevo home">
              <span className="brand-icon">c<span>.</span></span>
            </RouteLink>
            <span className="login-tag">EARLY ACCESS PORTAL</span>
          </div>

          <header className="login-header">
            <h1>Welcome Back</h1>
            <p>Continue your CroevoAI journey.</p>
          </header>

          {authStatusMessage && (
            <div className={`auth-banner auth-banner-${authStatusMessage.type}`} role="status">
              <div className="auth-banner-icon">
                {authStatusMessage.type === 'info' ? 'ℹ' : '⚠'}
              </div>
              <div className="auth-banner-content">
                <strong>{authStatusMessage.title}</strong>
                <p>{authStatusMessage.text}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="login-form">
            {/* Email Field */}
            <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
              <label htmlFor="login-email" className="form-label">
                Email Address <span className="req-star">*</span>
              </label>
              <div className="input-wrap">
                <input
                  type="email"
                  id="login-email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                  }}
                  placeholder="you@example.com"
                  autoComplete="email"
                  disabled={isLoading}
                  className="form-input"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
              </div>
              {errors.email && (
                <span id="email-error" className="field-error" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Password Field */}
            <div className={`form-group ${errors.password ? 'has-error' : ''}`}>
              <div className="label-row">
                <label htmlFor="login-password" className="form-label">
                  Password <span className="req-star">*</span>
                </label>
                <button
                  type="button"
                  className="forgot-link"
                  onClick={() => setForgotModalOpen(true)}
                  tabIndex={0}
                >
                  Forgot Password?
                </button>
              </div>
              <div className="input-wrap password-wrap">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="login-password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
                  }}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  disabled={isLoading}
                  className="form-input"
                  aria-invalid={errors.password ? 'true' : 'false'}
                  aria-describedby={errors.password ? 'password-error' : undefined}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  tabIndex={0}
                >
                  {showPassword ? (
                    /* Eye Slash Icon */
                    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M14.12 14.12A7.95 7.95 0 0110 15.5C5.5 15.5 2.5 10 2.5 10a15.7 15.7 0 013.3-4.14M8.5 4.64A7.88 7.88 0 0110 4.5c4.5 0 7.5 5.5 7.5 5.5a15.6 15.6 0 01-2.16 3.19M3 3l14 14" />
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  ) : (
                    /* Eye Icon */
                    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2.5 10s3-5.5 7.5-5.5 7.5 5.5 7.5 5.5-3 5.5-7.5 5.5-7.5-5.5-7.5-5.5z" />
                      <circle cx="10" cy="10" r="2.5" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && (
                <span id="password-error" className="field-error" role="alert">
                  {errors.password}
                </span>
              )}
            </div>

            {/* Remember Me */}
            <div className="form-remember-row">
              <label className={`custom-checkbox-row compact-checkbox ${rememberMe ? 'is-checked' : ''}`}>
                <span className="checkbox-input-wrap">
                  <input
                    type="checkbox"
                    id="remember-me"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    disabled={isLoading}
                    className="sr-only"
                  />
                  <span className="custom-checkbox-box" aria-hidden="true">
                    <svg viewBox="0 0 16 16" className="check-icon">
                      <path d="M3.5 8.5L6.5 11.5L12.5 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </span>
                <span className="checkbox-label-text">Remember me on this device</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="button button-primary login-submit-btn"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner-dot" aria-hidden="true" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <span>Log In</span>
                  <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon">
                    <path d="M4 10h11M10 4l6 6-6 6" />
                  </svg>
                </>
              )}
            </button>
          </form>

          <div className="login-footer-cta">
            <p>
              Don’t have an account?{' '}
              <RouteLink to="/payments" className="join-waitlist-link">
                Join the Waitlist <span aria-hidden="true">→</span>
              </RouteLink>
            </p>
          </div>
        </div>
      </section>

      {/* Forgot Password Information Modal */}
      {forgotModalOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setForgotModalOpen(false); }}>
          <section className="waitlist-modal" role="dialog" aria-modal="true" aria-labelledby="forgot-modal-title">
            <button className="modal-close" aria-label="Close dialog" onClick={() => setForgotModalOpen(false)}>×</button>
            <div className="modal-mark">c<span>.</span></div>
            <span className="eyebrow">ACCOUNT RECOVERY</span>
            <h2 id="forgot-modal-title">Password Reset</h2>
            <p>
              Self-service password recovery will be activated alongside the platform account system on 15 October 2026.
            </p>
            <p>
              If you have reserved a spot on the waitlist, your credentials will be delivered to your registered email upon platform opening.
            </p>
            <button className="button button-secondary modal-done" onClick={() => setForgotModalOpen(false)}>
              Got It
            </button>
          </section>
        </div>
      )}
    </div>
  );
}
