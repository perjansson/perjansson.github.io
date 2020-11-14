import styled from 'styled-components'

import { Text } from '../components/Text'
import { fadeIn } from '../styles/animations'

export const Link = styled(Text)`
  color: var(--link-color);
  opacity: 0;
  animation: ${fadeIn} 250ms ease-in forwards;

  a {
    color: var(--link-color);
  }
`
