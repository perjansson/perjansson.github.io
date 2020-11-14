import React from 'react'
import { any, bool, string } from 'prop-types'

import { Box } from './Box'
import { Text, TextVariant } from './Text'

export const Header = ({
  children,
  contrast,
  glow,
  textVariant,
  textTransform,
  noSizeScale,
  ...rest
}) => {
  return (
    <Box {...rest}>
      <Text
        textTransform={textTransform}
        variant={textVariant}
        noSizeScale={noSizeScale}
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
  noSizeScale: bool,
  glow: bool,
}

Header.defaultProps = {
  textVariant: 'xxLarge',
  textTransform: 'none',
  glow: true,
}
