import { keyframes } from 'styled-components'

export const fadeIn = keyframes`
  from {
    transform: scale(.95);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`

export const shake = keyframes`
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

export const crack1 = keyframes`
  0%, 95% {
    transform: translate(-50%, -50%);
  }

  100% {
    transform: translate(-51%, -48%);
  }
`

export const crack2 = keyframes`
  0%, 95% {
    transform: translate(-50%, -50%);
  }

  100% {
    transform: translate(-49%, -53%);
  }
`

export const puffIn = keyframes`
  0% {
    transform: scale(0);
    filter: blur(40px);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    filter: blur(0px);
    opacity: 1;
  }`
