import React from 'react'
import styled from 'styled-components'
import { layout, space } from 'styled-system'
import { string, any } from 'prop-types'

import Text from '../components/Text'

export const Nav = styled.nav`
  ${space}
  ${layout}
  > a {
    display: block;
    text-decoration: none;
  }
`

export const NavLink = ({ href, children, ...rest }) => (
  <a href={href}>
    <Text variant="medium" color="var(--link-color)" fadeIn {...rest}>
      {children}
    </Text>
  </a>
)

NavLink.propTypes = {
  href: string,
  children: any,
}

export const Navigation = () => (
  <Nav
    marginTop={['40px', '60px', '80px']}
    marginLeft={['40px', '60px', '80px']}
  >
    <NavLink href="#who am i">who am i</NavLink>
    <NavLink href="#what have i done">what have i done</NavLink>
  </Nav>
)
