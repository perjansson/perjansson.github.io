import styled, { css } from 'styled-components'
import {
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
  small: 16,
  medium: 24,
  large: 32,
  xLarge: 38,
  xxLarge: 44,
}

const Text = styled.div`
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${flexbox}
  ${({ fadeIn }) =>
    fadeIn &&
    css`
      animation: ${fadeInAnimation} 250ms ease-in forwards;
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
  ${variant({
    variants: {
      small: {
        fontSize: generateSizes(VARIANTS_BASE['small']),
      },
      medium: {
        fontSize: generateSizes(VARIANTS_BASE['medium']),
      },
      large: {
        fontSize: generateSizes(VARIANTS_BASE['large'], 1.4),
      },
      xLarge: {
        fontSize: generateSizes(VARIANTS_BASE['xLarge'], 1.6),
      },
      xxLarge: {
        fontSize: generateSizes(VARIANTS_BASE['xxLarge'], 1.8),
      },
    },
  })}`

export const TextVariant = oneOf([
  'small',
  'medium',
  'large',
  'xLarge',
  'xxLarge',
])

Text.propTypes = {
  variant: TextVariant,
  glowColor: string,
  fadeIn: bool,
}

Text.defaultProps = {
  variant: 'medium',
}

export default Text
