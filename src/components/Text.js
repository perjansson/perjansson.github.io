import styled, { keyframes, css } from 'styled-components'
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

const VARIANTS_BASE = {
  medium: 18,
  large: 24,
}

const glow = (fromColor, toColor) => keyframes`
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px ${fromColor}, 0 0 40px ${fromColor}, 0 0 50px ${fromColor}, 0 0 60px ${fromColor}, 0 0 70px ${fromColor};
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px ${toColor}, 0 0 40px ${toColor}, 0 0 50px ${toColor}, 0 0 60px ${toColor}, 0 0 70px ${toColor}, 0 0 80px ${toColor};
  }
`

const Text = styled.div` 
  ${({ glowColors }) =>
    glowColors[0] &&
    css`
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px ${glowColors[0]},
        0 0 40px ${glowColors[0]}, 0 0 50px ${glowColors[0]},
        0 0 60px ${glowColors[0]}, 0 0 70px ${glowColors[0]};
    `}
  ${({ glowColors, pulse }) =>
    glowColors &&
    pulse &&
    css`
      animation: ${glow(glowColors[1], glowColors[0])} 1s ease-in-out infinite
        alternate;
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
    },
  })}`

Text.propTypes = {
  variant: oneOf(['medium', 'large']),
  glowColors: string,
  pulse: bool,
}

Text.defaultProps = {
  variant: 'medium',
}

export default Text
