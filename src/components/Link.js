import React from 'react'
import styled from 'styled-components'
import { Link as RouterLink } from '@reach/router'
import { string, node, bool } from 'prop-types'

import { Text } from '../components/Text'
import { fadeIn } from '../styles/animations'

export const StyledLink = styled(Text)`
  color: var(--link-color);
  opacity: 0;
  animation: ${fadeIn} 250ms ease-in forwards;

  a {
    color: var(--link-color);
  }
`

export const Link = ({ to, ...rest }) => (
  <RouterLink to={to}>
    <StyledLink {...rest} />
  </RouterLink>
)

Link.propTypes = {
  to: string,
}

export const Anchor = ({ url, external, children, ...rest }) => {
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <StyledLink {...rest}>
      <a href={url} {...externalProps}>
        {children}
      </a>
    </StyledLink>
  )
}

Anchor.propTypes = {
  url: string,
  external: bool,
  children: node,
}
