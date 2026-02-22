// Dashboard Configuration
// This file contains configuration for the admin analytics dashboard

// IMPORTANT: For security, the password should be managed server-side
// This is a simple frontend implementation for MVP
// For production, consider implementing proper backend authentication

export const DASHBOARD_CONFIG = {
  // Password for accessing the analytics dashboard
  // WARNING: This is frontend-only security (not production-grade)
  // Default: evomedia2026
  // In production, implement backend API with proper authentication
  PASSWORD: 'evomedia2026', // Hardcoded for now - will be replaced with API
  
  // Session duration in minutes (how long login lasts)
  SESSION_DURATION_MINUTES: 60,
  
  // Enable/disable the dashboard
  ENABLED: true,
  
  // Dashboard features
  FEATURES: {
    REAL_TIME_STATS: true,
    FORM_SUBMISSION_TRACKING: true,
    PAGE_VIEW_TRACKING: true,
    INTEGRATION_STATUS: true,
    DATA_RESET: true,
  },
  
  // Security notes
  SECURITY_NOTES: [
    'WARNING: Frontend-only password protection',
    'Password is visible in client-side code',
    'For production: Implement backend API authentication',
    'For production: Use environment variables server-side',
    'For production: Hash passwords, never store plain text',
    'This is suitable for MVP but not production-grade security',
  ]
}

// Password validation rules
export const PASSWORD_RULES = {
  MIN_LENGTH: 8,
  REQUIRE_UPPERCASE: true,
  REQUIRE_LOWERCASE: true,
  REQUIRE_NUMBERS: true,
  REQUIRE_SPECIAL_CHARS: false,
}

// Dashboard access logging
export const LOG_CONFIG = {
  ENABLE_LOGGING: true,
  LOG_LOCAL_STORAGE: true,
  MAX_LOG_ENTRIES: 100,
}