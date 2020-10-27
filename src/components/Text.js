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

const VARIANTS_BASE = {
  medium: 18,
  large: 24,
  xLarge: 42,
}

const Text = styled.div`
  ${({ glowColor }) =>
    glowColor &&
    css`
      text-shadow: 0 0 0.05em ${glowColor};
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
    },
  })}`

Text.propTypes = {
  variant: oneOf(['medium', 'large', 'xLarge']),
  glowColor: string,
  pulse: bool,
}

Text.defaultProps = {
  variant: 'medium',
}

export default Text
