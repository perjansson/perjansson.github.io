import React from 'react'
import { string } from 'prop-types'
import styled, { keyframes } from 'styled-components'

import Text from './Text'

const shake = keyframes`
  5%, 15%, 25%, 35%, 55%, 65%, 75%, 95% {
    filter: blur(0.018em);
    transform: translateY(0.018em) rotate(0deg);
  }

  10%, 30%, 40%, 50%, 70%, 80%, 90% {
    filter: blur(0.01em);
    transform: translateY(-0.018em) rotate(0deg);
  }

  20%, 60% {
    filter: blur(0.03em);
    transform: translate(-0.018em, 0.018em) rotate(0deg);
  }

  45%, 85% {
    filter: blur(0.03em);
    transform: translate(0.018em, -0.018em) rotate(0deg);
  }

  100% {
    filter: blur(0.007em);
    transform: translate(0) rotate(-0.5deg);
  }
`

const crack1 = keyframes`
  0%, 95% {
    transform: translate(-50%, -50%);
  }

  100% {
    transform: translate(-51%, -48%);
  }
`

const crack2 = keyframes`
  0%, 95% {
    transform: translate(-50%, -50%);
  }

  100% {
    transform: translate(-49%, -53%);
  }
`

const Header = styled.h1`
  font-weight: 700;
  color: #fff;
  letter-spacing: 6px;
  text-transform: uppercase;
  text-shadow: 0 0 0.15em var(--landing-page-shadow-color);
  white-space: nowrap;
  filter: blur(0.007em);
  animation: ${shake} 2.5s linear forwards;

  span {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    -webkit-clip-path: polygon(10% 0%, 44% 0%, 70% 100%, 55% 100%);
    clip-path: polygon(10% 0%, 44% 0%, 70% 100%, 55% 100%);
  }

  ::before,
  ::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
  }

  ::before {
    animation: ${crack1} 2.5s linear forwards;
    clip-path: polygon(0% 0%, 10% 0%, 55% 100%, 0% 100%);
  }

  ::after {
    animation: ${crack2} 2.5s linear forwards;
    clip-path: polygon(44% 0%, 100% 0%, 100% 100%, 70% 100%);
  }
`

const BlackMirror = ({ children }) => (
  <Text variant="xLarge" textAlign="center">
    <Header data-text={children}>
      <span>{children}</span>
    </Header>
  </Text>
)

BlackMirror.propTypes = {
  children: string,
}

export default BlackMirror
