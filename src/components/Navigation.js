import React from 'react'
import styled from 'styled-components'
import { layout, space } from 'styled-system'
import { bool } from 'prop-types'

import Text from '../components/Text'

export const Nav = styled.nav`
  ${space}
  ${layout}
  > a {
    display: block;
    text-decoration: none;
  }
`

const NavLink = ({ href, contrast, children }) => (
  <a href={href}>
    <Text
      variant="medium"
      color={
        !contrast
          ? 'var(--secondary-header-color)'
          : 'var(--secondary-header-contrast-color)'
      }
      glowColor={
        !contrast
          ? 'var(--secondary-header-glow-color)'
          : 'var(--secondary-header-contrast-glow-color)'
      }
      fadeIn
    >
      {children}
    </Text>
  </a>
)

export const Navigation = ({ contrast }) => (
  <Nav
    marginTop={['40px', '60px', '80px']}
    marginLeft={['40px', '60px', '80px']}
  >
    <NavLink href="#who am i" contrast={contrast}>
      who am i
    </NavLink>
    <NavLink href="#what have i done" contrast={contrast}>
      what have i done
    </NavLink>
  </Nav>
)

Navigation.propTypes = {
  contrast: bool,
}

Navigation.defaultProps = {
  contrast: false,
}
