// Authentication Configuration
// WARNING: This is frontend-only security for MVP
// The password is visible in client-side JavaScript
// 
// FOR PRODUCTION: Implement backend API authentication
// 1. Create API route: /api/auth/login
// 2. Hash passwords (never store plain text)
// 3. Use HTTP-only cookies or JWT tokens
// 4. Store passwords in environment variables (not NEXT_PUBLIC_)

// ==============================================
// CHANGE THIS PASSWORD BEFORE LAUNCH!
// ==============================================
export const DASHBOARD_PASSWORD = 'evomedia2026';
// ==============================================

// Security level explanation
export const SECURITY_LEVEL = {
  level: 'MVP_FRONTEND_ONLY',
  description: 'Frontend-only password protection. Password is visible in source code.',
  risks: [
    'Password exposed in client-side JavaScript',
    'Anyone can view source code to see password',
    'No server-side validation',
    'No rate limiting on login attempts',
  ],
  recommendations: [
    'Change password before production launch',
    'Consider implementing backend API for production',
    'Use Google Analytics dashboard as primary analytics',
    'Monitor for unauthorized access attempts',
  ]
};

// Password validation (client-side only)
export const validatePassword = (input: string): boolean => {
  return input === DASHBOARD_PASSWORD;
};

// Session management
export const SESSION_CONFIG = {
  key: 'evomedia_dashboard_auth',
  duration: 60 * 60 * 1000, // 60 minutes in milliseconds
};

// Check if session is valid
export const isSessionValid = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const sessionData = sessionStorage.getItem(SESSION_CONFIG.key);
  if (!sessionData) return false;
  
  try {
    const { timestamp } = JSON.parse(sessionData);
    const now = Date.now();
    return (now - timestamp) < SESSION_CONFIG.duration;
  } catch {
    return false;
  }
};

// Create session
export const createSession = (): void => {
  if (typeof window === 'undefined') return;
  
  const sessionData = {
    timestamp: Date.now(),
    authenticated: true,
  };
  sessionStorage.setItem(SESSION_CONFIG.key, JSON.stringify(sessionData));
};

// Clear session
export const clearSession = (): void => {
  if (typeof window === 'undefined') return;
  sessionStorage.removeItem(SESSION_CONFIG.key);
};