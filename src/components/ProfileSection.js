import React from 'react'

import { MeType } from '../types'
import { SectionHeader } from './Section'
import { BackgroundBox } from './BackgroundBox'
import { NavLink } from './Navigation'

export const ProfileSection = ({ me }) => (
  <BackgroundBox
    asset="profile"
    height="100vh"
    justifyContent={['space-between', 'space-between']}
  >
    <SectionHeader maxWidth={['90%', '80%', '60%']}>
      {me.name}
      <br />
      {me.title}
    </SectionHeader>
    <NavLink
      href="#who am i"
      marginLeft={['20px', '40px', '60px']}
      marginBottom={['140px', '40px']}
      data-cy="who-am-i-link"
    >
      Read more{' '}
      <span role="img" aria-label="point down">
        👇
      </span>
    </NavLink>
  </BackgroundBox>
)

ProfileSection.propTypes = {
  me: MeType.isRequired,
}
