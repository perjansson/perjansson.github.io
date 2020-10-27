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
  medium: 18,
  large: 28,
  xLarge: 28,
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
      text-shadow: 0 0 0.15em ${glowColor};
    `}
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${flexbox}
  ${variant({
    variants: {
      medium: {
        fontSize: generateSizes(VARIANTS_BASE['medium']),
      },
      large: {
        fontSize: generateSizes(VARIANTS_BASE['large']),
      },
      xLarge: {
        fontSize: generateSizes(VARIANTS_BASE['xLarge'], 1.6),
      },
      xxLarge: {
        fontSize: generateSizes(VARIANTS_BASE['xxLarge'], 1.8),
      },
    },
  })}`

Text.propTypes = {
  variant: oneOf(['medium', 'large', 'xLarge', 'xxLarge']),
  glowColor: string,
  fadeIn: bool,
}

Text.defaultProps = {
  variant: 'medium',
}

export default Text
