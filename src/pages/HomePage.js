import React from 'react'

import content from '../content'
import { ProfileSection } from '../components/ProfileSection'
import { WhoAmISection } from '../components/WhoAmISection'
import { ContactSection } from '../components/ContactSection'
import { ProjectsSection } from '../components/ProjectsSection'

const HomePage = () => {
  // const onThemeChange = () => {
  //   const elem = document.documentElement
  //   elem.setAttribute(
  //     'data-theme',
  //     elem.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  //   )
  // }

  return (
    <>
      <ProfileSection me={content.me} />
      <WhoAmISection me={content.me} />
      <ContactSection contacts={content.me.contacts} />
      <ProjectsSection projects={content.projects} />
    </>
  )
}

export default HomePage
