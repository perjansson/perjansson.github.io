import styled, { css } from 'styled-components'
import {
  position,
  border,
  space,
  layout,
  flexbox,
  color,
  typography,
} from 'styled-system'

export const Box = styled.div`
  ${position}
  ${border}
  ${space}
  ${layout}
  ${flexbox}
  ${color}
  ${typography}
  ${({ cursor }) =>
    css`
      cursor: ${cursor};
    `}
`
