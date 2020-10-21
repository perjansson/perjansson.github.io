import styled from 'styled-components'
import {
  space,
  layout,
  color,
  typography,
  flexbox,
  variant,
} from 'styled-system'
import { oneOf, bool, string } from 'prop-types'

import { generateSizes } from '../util/responsiveHelper'

const VARIANTS_BASE = {
  medium: 18,
  large: 24,
}

const Text = styled('div')(
  {
    textShadow: ({ glowColor }) =>
      `0 0 10px #fff, 0 0 20px #fff, 0 0 30px ${glowColor}, 0 0 40px ${glowColor}, 0 0 50px ${glowColor}, 0 0 60px ${glowColor}, 0 0 70px ${glowColor}`,
  },
  space,
  layout,
  color,
  typography,
  flexbox,
  variant({
    variants: {
      medium: {
        fontSize: generateSizes(VARIANTS_BASE['medium']),
      },
      large: {
        fontSize: generateSizes(VARIANTS_BASE['large']),
      },
    },
  })
)

Text.propTypes = {
  variant: oneOf(['medium', 'large']),
  glowColor: string,
  pulse: bool,
}

Text.defaultProps = {
  variant: 'medium',
}

export default Text
