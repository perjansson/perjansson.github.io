import React from 'react'
import { func } from 'prop-types'

import { MeType } from '../types'
import { SectionHeader } from './Section'
import { BackgroundBox } from './BackgroundBox'
import { Box } from './Box'
import { Text } from './Text'
import { StyledLink } from './Link'

export const ProfileSection = ({ me, onThemeChange }) => (
  <BackgroundBox
    asset="profile"
    cover
    height="100vh"
    justifyContent="space-between"
  >
    <SectionHeader id="home" maxWidth={['90%', '80%', '60%']}>
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
      <Text
        fadeIn
        data-cy="who-am-i-link"
        marginLeft={['20px', '40px', '60px']}
      >
        <span role="img" aria-label="point down">
          👇
        </span>{' '}
        Read more
      </Text>
      {onThemeChange && (
        <StyledLink
          onClick={onThemeChange}
          fadeIn
          marginRight={['20px', '40px', '60px']}
          variant="xxSmall"
        >
          <span role="img" aria-label="theme change">
            🎨
          </span>{' '}
          Toggle theme
        </StyledLink>
      )}
    </Box>
  </BackgroundBox>
)

ProfileSection.propTypes = {
  me: MeType.isRequired,
  onThemeChange: func,
}
