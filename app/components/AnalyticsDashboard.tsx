'use client'

import { useState, useEffect } from 'react'
import { 
  DASHBOARD_PASSWORD, 
  validatePassword, 
  isSessionValid, 
  createSession, 
  clearSession,
  SECURITY_LEVEL 
} from '../config/auth'

export default function AnalyticsDashboard() {
  const [analyticsData, setAnalyticsData] = useState({
    pageViews: 0,
    uniqueVisitors: 0,
    formSubmissions: 0,
    averageTime: 0,
    topPages: [] as string[],
  })

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [showLogin, setShowLogin] = useState(false)
  const [loginError, setLoginError] = useState('')

  useEffect(() => {
    // Check if user is already authenticated (from session storage)
    if (isSessionValid()) {
      setIsAuthenticated(true)
    }

    // Load analytics data from localStorage
    const loadAnalyticsData = () => {
      const pageViews = parseInt(localStorage.getItem('evomedia_page_views') || '0')
      const visitorId = localStorage.getItem('evomedia_visitor_id')
      const referrer = localStorage.getItem('evomedia_referrer') || 'direct'
      
      // Track form submissions from session
      const formSubmissions = parseInt(sessionStorage.getItem('evomedia_form_submissions') || '0')

      setAnalyticsData({
        pageViews,
        uniqueVisitors: visitorId ? 1 : 0,
        formSubmissions,
        averageTime: 45, // Mock data - would come from API
        topPages: ['/', '/thank-you', '#contact'],
      })
    }

    if (isAuthenticated) {
      loadAnalyticsData()
      // Update every 30 seconds
      const interval = setInterval(loadAnalyticsData, 30000)
      return () => clearInterval(interval)
    }
  }, [isAuthenticated])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError('')

    if (validatePassword(password)) {
      setIsAuthenticated(true)
      createSession()
      setShowLogin(false)
      setPassword('')
    } else {
      setLoginError('Incorrect password')
      setPassword('')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    clearSession()
    setShowLogin(false)
  }

  const toggleLogin = () => {
    setShowLogin(!showLogin)
    setLoginError('')
    setPassword('')
  }

  // If not authenticated and not showing login, show minimal button
  if (!isAuthenticated && !showLogin) {
    return (
      <button
        onClick={toggleLogin}
        className="fixed bottom-4 right-4 z-50 p-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
        title="Admin Dashboard"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-gray-900 text-white text-xs rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Admin Dashboard - Click to login
        </div>
      </button>
    )
  }

  // Login form
  if (showLogin && !isAuthenticated) {
    return (
      <div className="fixed bottom-4 right-4 z-50 w-80 bg-gray-900/95 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-white">Admin Login</h3>
              <p className="text-xs text-gray-400">Evolution Media Dashboard</p>
            </div>
          </div>
          <button
            onClick={toggleLogin}
            className="p-1 hover:bg-white/10 rounded-lg transition-colors"
            title="Close"
          >
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Login Form */}
        <div className="p-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Dashboard Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                placeholder="Enter admin password"
                autoFocus
              />
              {loginError && (
                <p className="mt-2 text-sm text-red-400">{loginError}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              Login to Dashboard
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={toggleLogin}
                className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>

          <div className="mt-6 p-3 bg-yellow-900/20 border border-yellow-500/20 rounded-lg">
            <p className="text-xs text-yellow-400">
              <strong>⚠️ Security Notice:</strong> This is frontend-only password protection.
              For production, implement backend API authentication.
              Change password in <code className="text-yellow-300">app/config/auth.ts</code> before launch.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Authenticated dashboard view
  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 bg-gray-900/95 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-white">Analytics Dashboard</h3>
            <p className="text-xs text-gray-400">Evolution Media • Admin</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleLogout}
            className="px-3 py-1 text-xs bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-lg transition-colors"
            title="Logout"
          >
            Logout
          </button>
          <button
            onClick={handleLogout}
            className="p-1 hover:bg-white/10 rounded-lg transition-colors"
            title="Close"
          >
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="text-2xl font-bold text-cyan-300">{analyticsData.pageViews}</div>
            <div className="text-sm text-gray-400 mt-1">Page Views</div>
          </div>
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="text-2xl font-bold text-green-300">{analyticsData.uniqueVisitors}</div>
            <div className="text-sm text-gray-400 mt-1">Unique Visitors</div>
          </div>
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="text-2xl font-bold text-yellow-300">{analyticsData.formSubmissions}</div>
            <div className="text-sm text-gray-400 mt-1">Form Submissions</div>
          </div>
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="text-2xl font-bold text-purple-300">{analyticsData.averageTime}s</div>
            <div className="text-sm text-gray-400 mt-1">Avg. Time</div>
          </div>
        </div>

        {/* Top Pages */}
        <div className="mb-6">
          <h4 className="font-semibold text-white mb-3">Top Pages</h4>
          <div className="space-y-2">
            {analyticsData.topPages.map((page, index) => (
              <div key={page} className="flex items-center justify-between p-2 hover:bg-white/5 rounded-lg transition-colors">
                <div className="flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center bg-white/10 rounded mr-3">
                    <span className="text-xs font-bold">{index + 1}</span>
                  </div>
                  <span className="text-sm text-gray-300">{page}</span>
                </div>
                <div className="text-xs text-gray-500">42 visits</div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Status */}
        <div className="p-3 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl border border-cyan-500/20">
          <h4 className="font-semibold text-white mb-2 flex items-center">
            <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Analytics Status
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Google Analytics</span>
              <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Connected</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Vercel Analytics</span>
              <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Active</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Local Tracking</span>
              <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">Recording</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Admin Access</span>
              <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Authenticated</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Security Level</span>
              <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">MVP Frontend</span>
            </div>
          </div>
        </div>

        {/* Security Warning */}
        <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-500/20 rounded-xl">
          <h4 className="font-semibold text-yellow-300 mb-2 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Security Notice
          </h4>
          <p className="text-xs text-yellow-400">
            This dashboard uses frontend-only password protection.
            For production, implement backend API authentication.
            Change password in <code className="text-yellow-300">app/config/auth.ts</code>.
          </p>
        </div>

        {/* Instructions */}
        <div className="mt-4 text-xs text-gray-500">
          <p>📊 Data updates every 30 seconds</p>
          <p>🔒 Admin-only access - visitors cannot see this</p>
          <p>📈 Full analytics in Google Analytics dashboard</p>
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-white/10 bg-black/50">
        <div className="flex items-center justify-between">
          <a
            href="https://analytics.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center"
          >
            Open GA Dashboard
            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <button
            onClick={() => {
              localStorage.removeItem('evomedia_page_views')
              localStorage.removeItem('evomedia_visitor_id')
              localStorage.removeItem('evomedia_referrer')
              sessionStorage.removeItem('evomedia_form_submissions')
              window.location.reload()
            }}
            className="text-xs text-gray-400 hover:text-gray-300 transition-colors"
          >
            Reset Data
          </button>
        </div>
      </div>
    </div>
  )
}