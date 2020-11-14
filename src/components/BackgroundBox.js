import styled from 'styled-components'
import { string, oneOf } from 'prop-types'

import { SectionBox } from './Section'

const BackgroundGradient = {
  toBottom:
    'linear-gradient(to bottom, transparent, var(--primary-bg-half-transparent-color), var(--primary-bg-color))',
  full:
    'linear-gradient(to bottom, var(--primary-bg-half-transparent-color), var(--primary-bg-half-transparent-color))',
}

export const BackgroundBox = styled(SectionBox)`
  background-image: ${({ asset, gradientType }) =>
    BackgroundGradient[gradientType] +
    ', url(assets/' +
    asset +
    '_small' +
    (asset === 'profile' ? '_portrait' : '') +
    '.jpg)'};

  @media (orientation: landscape) {
    background-image: ${({ asset, gradientType }) =>
      BackgroundGradient[gradientType] +
      ', url(assets/' +
      asset +
      '_small.jpg)'};
  }

  @media (min-width: 52em) and (orientation: landscape) {
    background-image: ${({ asset, gradientType }) =>
      BackgroundGradient[gradientType] +
      ', url(assets/' +
      asset +
      '_medium.jpg)'};
  }

  @media (min-width: 64em) and (orientation: landscape) {
    background-image: ${({ asset, gradientType }) =>
      BackgroundGradient[gradientType] +
      ', url(assets/' +
      asset +
      '_large.jpg)'};
  }

  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: all 0.2s ease-in-out;
  z-index: 1;
  border-radius: ${({ asset }) => (asset === 'profile' ? 0 : '20px')};
  opacity: 1;

  @media (min-width: 52em) and (orientation: landscape) {
    opacity: ${({ asset }) => (asset === 'profile' ? 1.0 : 0.8)};
  }

  &:hover {
    opacity: 1;
    transform: ${({ asset }) =>
      asset === 'profile' ? 'scale(1.0)' : 'scale(1.0)'};
    z-index: 2;
    cursor: pointer;
  }
`

BackgroundBox.propTypes = {
  asset: string,
  gradientType: oneOf(['toBottom', 'full']),
}

BackgroundBox.defaultProps = {
  gradientType: 'toBottom',
}
