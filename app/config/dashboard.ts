// Dashboard Configuration
// This file contains configuration for the admin analytics dashboard

// IMPORTANT: Change this password for production use!
// In a real application, you should:
// 1. Use environment variables for passwords
// 2. Implement proper authentication (OAuth, JWT, etc.)
// 3. Store passwords securely (hashed, not plain text)
// 4. Consider using a backend API for authentication

export const DASHBOARD_CONFIG = {
  // Password for accessing the analytics dashboard
  // Default: evomedia2026
  // Change this to your preferred password
  PASSWORD: process.env.NEXT_PUBLIC_DASHBOARD_PASSWORD || 'evomedia2026',
  
  // Session duration in minutes (how long login lasts)
  SESSION_DURATION_MINUTES: 60,
  
  // Enable/disable the dashboard
  ENABLED: process.env.NEXT_PUBLIC_ENABLE_DASHBOARD !== 'false',
  
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
    'This is a simple frontend password protection',
    'For production, implement proper backend authentication',
    'Consider using environment variables for passwords',
    'Regularly rotate passwords',
    'Monitor dashboard access logs',
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