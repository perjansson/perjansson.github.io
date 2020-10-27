import React from 'react'
import { any } from 'prop-types'

import Box from './Box'
import Text from './Text'

const Header = ({ children, ...rest }) => {
  return (
    <header>
      <Box
        width={1}
        minWidth={350}
        display="flex"
        alignItems="center"
        justifyContent="center"
        {...rest}
      >
        <Text
          variant="xLarge"
          color="var(--primary-header-color)"
          glowColor="var(--primary-header-glow-color)"
          fadeIn
        >
          {children}
        </Text>
      </Box>
    </header>
  )
}

Header.propTypes = {
  children: any.isRequired,
}

export default Header
