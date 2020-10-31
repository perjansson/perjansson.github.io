import React from 'react'
import styled from 'styled-components'
import { layout, space } from 'styled-system'

import Text from '../components/Text'

export const Nav = styled.nav`
  ${space}
  ${layout}
  > a {
    display: block;
    text-decoration: none;
  }
`

export const Navigation = () => (
  <Nav
    marginTop={['40px', '60px', '80px']}
    marginLeft={['40px', '60px', '80px']}
  >
    <a href="#who am i">
      <Text
        variant="medium"
        color="var(--primary-header-contrast-color)"
        glowColor="var(--primary-header-contrast-glow-color)"
      >
        who am i
      </Text>
    </a>
    <a href="#what have i done">
      <Text
        variant="medium"
        color="var(--primary-header-contrast-color)"
        glowColor="var(--primary-header-contrast-glow-color)"
      >
        what have i done
      </Text>
    </a>
  </Nav>
)
