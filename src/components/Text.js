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
  xSmall: 12,
  small: 16,
  medium: 24,
  large: 28,
  xLarge: 36,
  xxLarge: 42,
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
  ${variant({
    variants: {
      xSmall: {
        fontSize: generateSizes(VARIANTS_BASE['xSmall']),
      },
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
        fontSize: generateSizes(VARIANTS_BASE['xxLarge'], 1.7),
      },
    },
  })}`

export const TextVariant = oneOf([
  'xSmall',
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
  noSizeScale: bool,
}

Text.defaultProps = {
  variant: 'medium',
}

export default Text
