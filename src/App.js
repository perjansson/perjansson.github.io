import React from 'react'
import { Redirect, Router } from '@reach/router'

import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'

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
      <Router style={{ height: '100%' }}>
        <LandingPage path="/" />
        <HomePage path="home" onThemeChange={handleOnThemeChange} />
        <ProjectPage path="projects/:projectId" />
        <Redirect from="/" to="/" default noThrow />
      </Router>
    </>
  )
}
