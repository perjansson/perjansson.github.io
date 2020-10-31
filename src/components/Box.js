import styled, { css } from 'styled-components'
import { space, layout, flexbox, color, typography } from 'styled-system'

const Box = styled.div`
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

export default Box
