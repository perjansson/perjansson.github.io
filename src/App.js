import React, { useState } from 'react'

import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'

function App() {
  const [showApp, setShowApp] = useState(false)

  return !showApp ? (
    <LandingPage onClick={() => setShowApp(true)} />
  ) : (
    <HomePage />
  )
}

export default App
