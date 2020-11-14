import React from 'react'
import { func } from 'prop-types'

import content from '../content'
import { ProfileSection } from '../components/ProfileSection'
import { WhoAmISection } from '../components/WhoAmISection'
import { ContactSection } from '../components/ContactSection'
import { ProjectsSection } from '../components/ProjectsSection'

const HomePage = ({ onThemeChange }) => (
  <>
    <ProfileSection me={content.me} onThemeChange={onThemeChange} />
    <WhoAmISection me={content.me} />
    <ContactSection contacts={content.me.contacts} />
    <ProjectsSection projects={content.projects} />
  </>
)

HomePage.propTypes = {
  onThemeChange: func,
}

export default HomePage
