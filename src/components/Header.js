import React from 'react'
import { any, bool } from 'prop-types'

import Box from './Box'
import Text from './Text'

const Header = ({ children, contrast, ...rest }) => {
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
          textTransform="lowercase"
          variant="xLarge"
          color={
            !contrast
              ? 'var(--primary-header-color)'
              : 'var(--primary-header-contrast-color)'
          }
          glowColor={
            !contrast
              ? 'var(--primary-header-glow-color)'
              : 'var(--primary-header-contrast-glow-color)'
          }
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
  contrast: bool,
}

export default Header
