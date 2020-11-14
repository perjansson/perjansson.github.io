import React from 'react'
import { func } from 'prop-types'

import { MeType } from '../types'
import { SectionHeader } from './Section'
import { BackgroundBox } from './BackgroundBox'
import { NavLink } from './Navigation'
import { Box } from './Box'
import { Link } from './Link'

export const ProfileSection = ({ me, onThemeChange }) => (
  <BackgroundBox asset="profile" height="100vh" justifyContent="space-between">
    <SectionHeader maxWidth={['90%', '80%', '60%']}>
      {me.name}
      <br />
      {me.title}
    </SectionHeader>
    <Box
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      marginBottom={['140px', '40px']}
    >
      <NavLink
        href="#who am i"
        fadeIn
        data-cy="who-am-i-link"
        marginLeft={['20px', '40px', '60px']}
      >
        <span role="img" aria-label="point down">
          👇
        </span>{' '}
        Read more
      </NavLink>
      {onThemeChange && (
        <Link
          onClick={onThemeChange}
          fadeIn
          marginRight={['20px', '40px', '60px']}
          variant="xxSmall"
        >
          <span role="img" aria-label="theme change">
            🎨
          </span>{' '}
          Toggle theme
        </Link>
      )}
    </Box>
  </BackgroundBox>
)

ProfileSection.propTypes = {
  me: MeType.isRequired,
  onThemeChange: func,
}
