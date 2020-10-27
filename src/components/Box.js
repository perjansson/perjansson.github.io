import styled, { css } from 'styled-components'
import { space, layout, flexbox, color } from 'styled-system'

const Box = styled.div`
  ${space}
  ${layout}
  ${flexbox}
  ${color}
  ${({ cursor }) =>
    css`
      cursor: ${cursor};
    `}
`

export default Box
