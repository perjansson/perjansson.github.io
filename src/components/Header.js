import React from 'react'
import { any, bool, string } from 'prop-types'

import Box from './Box'
import Text, { TextVariant } from './Text'

const Header = ({
  children,
  contrast,
  glow,
  textVariant,
  textTransform,
  ...rest
}) => {
  return (
    <Box minWidth={350} {...rest}>
      <Text
        textTransform={textTransform}
        variant={textVariant}
        color={
          !contrast
            ? 'var(--primary-header-color)'
            : 'var(--primary-header-contrast-color)'
        }
        glowColor={
          glow
            ? !contrast
              ? 'var(--primary-header-glow-color)'
              : 'var(--primary-header-contrast-glow-color)'
            : undefined
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
  textTransform: string,
  glow: bool,
}

Header.defaultProps = {
  textVariant: 'xLarge',
  textTransform: 'none',
  glow: true,
}

export default Header
