import styled from 'styled-components'
import {
  space,
  layout,
  color,
  typography,
  flexbox,
  variant,
} from 'styled-system'
import { oneOf } from 'prop-types'
import { generateSizes } from '../util/responsiveHelper'

const VARIANTS_BASE = {
  medium: 18,
  large: 24,
}

const Text = styled('div')(
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
}

Text.defaultProps = {
  variant: 'medium',
}

export default Text
