import React from 'react'
import { string } from 'prop-types'

import Box from './Box'
import Text from './Text'
import { generateSizes } from '../util/responsiveHelper'

const Header = ({ children }) => {
  const onThemeChange = () => {
    const elem = document.documentElement
    elem.setAttribute(
      'data-theme',
      elem.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    )
  }

  return (
    <header>
      <Box
        width={1}
        minWidth={350}
        height={generateSizes(120, 1.1)}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="var(--secondary-bg-color)"
      >
        <Text
          variant="large"
          color="var(--primary-header-color)"
          marginLeft="auto"
          glowColor="var(--primary-header-glow-color)"
          pulse
        >
          {children}
        </Text>
        <Box
          width={['5%', '3.5%', '2%', '1.5%']}
          height="100%"
          marginLeft="auto"
          bg="var(--opposite-theme-bg-color)"
          onClick={onThemeChange}
        />
      </Box>
    </header>
  )
}

Header.propTypes = {
  children: string.isRequired,
}

export default Header
