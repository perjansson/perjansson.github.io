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
  medium: 22,
  large: 28,
  xLarge: 32,
  xxLarge: 38,
}

const Text = styled.div`
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
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${flexbox}
  ${({ textTransform, textDecoration }) =>
    css`
      text-transform: ${textTransform};
      text-decoration: ${textDecoration};
    `}
  ${variant({
    variants: {
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

export const TextVariant = oneOf(['medium', 'large', 'xLarge', 'xxLarge'])

Text.propTypes = {
  variant: TextVariant,
  glowColor: string,
  fadeIn: bool,
}

Text.defaultProps = {
  variant: 'medium',
}

export default Text
