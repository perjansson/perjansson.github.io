import React from 'react'
import { Redirect, Router } from '@reach/router'

import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'

export const App = () => (
  <Router style={{ height: '100%' }}>
    <LandingPage path="/" />
    <HomePage path="home" />
    <Redirect from="/" to="/" default noThrow />
  </Router>
)
