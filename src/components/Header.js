import React from 'react'
import { any, bool } from 'prop-types'

import Box from './Box'
import Text, { TextVariant } from './Text'

const Header = ({ children, contrast, textVariant, ...rest }) => {
  return (
    <Box minWidth={350} {...rest}>
      <Text
        textTransform="lowercase"
        variant={textVariant}
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
  )
}

Header.propTypes = {
  children: any.isRequired,
  contrast: bool,
  textVariant: TextVariant,
}

Header.defaultProps = {
  textVariant: 'xLarge',
}

export default Header
