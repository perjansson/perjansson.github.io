import styled, { css } from 'styled-components'
import {
  position,
  border,
  space,
  layout,
  color,
  typography,
  flexbox,
  variant,
} from 'styled-system'
import { oneOf, string, bool } from 'prop-types'

import { generateSizes } from '../util/responsiveHelper'
import { fadeIn as fadeInAnimation } from '../styles/animations'

const VARIANTS_BASE = {
  xSmall: 16,
  small: 20,
  medium: 26,
  large: 32,
  xLarge: 36,
  xxLarge: 40,
}

const Text = styled.div`
  ${position}
  ${border}
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${flexbox}
  ${({ fadeIn }) =>
    fadeIn &&
    css`
      opacity: 0;
      animation: ${fadeInAnimation} 250ms 500ms ease-in forwards;
    `}
  ${({ glowColor }) =>
    glowColor &&
    css`
      text-shadow: 0 0 0.25em ${glowColor};
    `}
  ${({ textTransform, textDecoration }) =>
    css`
      text-transform: ${textTransform};
      text-decoration: ${textDecoration};
    `}
  ${({ noSizeScale }) =>
    variant({
      variants: {
        xSmall: {
          fontSize: noSizeScale
            ? VARIANTS_BASE['xSmall']
            : generateSizes(VARIANTS_BASE['xSmall']),
        },
        small: {
          fontSize: noSizeScale
            ? VARIANTS_BASE['small']
            : generateSizes(VARIANTS_BASE['small']),
        },
        medium: {
          fontSize: noSizeScale
            ? VARIANTS_BASE['medium']
            : generateSizes(VARIANTS_BASE['medium']),
        },
        large: {
          fontSize: noSizeScale
            ? VARIANTS_BASE['large']
            : generateSizes(VARIANTS_BASE['large'], 1.1),
        },
        xLarge: {
          fontSize: noSizeScale
            ? VARIANTS_BASE['xLarge']
            : generateSizes(VARIANTS_BASE['xLarge'], 1.4),
        },
        xxLarge: {
          fontSize: noSizeScale
            ? VARIANTS_BASE['xxLarge']
            : generateSizes(VARIANTS_BASE['xxLarge'], 1.4),
        },
        xxxLarge: {
          fontSize: noSizeScale
            ? VARIANTS_BASE['xxLarge']
            : generateSizes(VARIANTS_BASE['xxLarge'], 1.8),
        },
      },
    })}
   `

export const TextVariant = oneOf([
  'xSmall',
  'small',
  'medium',
  'large',
  'xLarge',
  'xxLarge',
  'xxxLarge',
])

Text.propTypes = {
  variant: TextVariant,
  glowColor: string,
  fadeIn: bool,
  noSizeScale: bool,
}

Text.defaultProps = {
  variant: 'medium',
}

export default Text
