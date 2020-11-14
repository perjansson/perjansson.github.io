import React from 'react'

import content from '../content'
import { ProfileSection } from '../components/ProfileSection'
import { WhoAmISection } from '../components/WhoAmISection'
import { ContactSection } from '../components/ContactSection'
import { ProjectsSection } from '../components/ProjectsSection'

const HomePage = () => {
  const handleOnThemeChange = () => {
    const elem = document.documentElement
    const newThemeKey =
      elem.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'

    elem.setAttribute('data-theme', newThemeKey)
    localStorage.setItem('theme', newThemeKey)
  }

  return (
    <>
      <ProfileSection me={content.me} onThemeChange={handleOnThemeChange} />
      <WhoAmISection me={content.me} />
      <ContactSection contacts={content.me.contacts} />
      <ProjectsSection projects={content.projects} />
    </>
  )
}

export default HomePage
