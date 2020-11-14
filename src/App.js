import React from 'react'
import { Redirect, Router } from '@reach/router'

import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import { ScrollOnNav } from './components/ScrollOnNav'

export const App = () => {
  const handleOnThemeChange = () => {
    const elem = document.documentElement
    const newThemeKey =
      elem.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'

    elem.setAttribute('data-theme', newThemeKey)
    localStorage.setItem('theme', newThemeKey)
  }

  return (
    <>
      <ScrollOnNav />
      <Router style={{ height: '100%' }}>
        <LandingPage path="/" />
        <HomePage path="home" onThemeChange={handleOnThemeChange} />
        <HomePage path="whoami" onThemeChange={handleOnThemeChange} />
        <Redirect from="/" to="/" default noThrow />
      </Router>
    </>
  )
}
