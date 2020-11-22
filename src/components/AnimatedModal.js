import React, { useEffect } from 'react'
import styled from 'styled-components'
import { func, any } from 'prop-types'

import { Box } from './Box'
import { puffIn } from '../styles/animations'

const AnimateInBox = styled(Box)`
  animation: ${puffIn} 0.4s cubic-bezier(0.47, 0, 0.745, 0.715) both;
`

export const AnimatedModal = ({ children, onClose }) => {
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden'
    document.body.scroll = 'no'
    return () => {
      document.documentElement.style.overflow = 'scroll'
      document.body.scroll = 'yes'
    }
  }, [])

  return (
    <AnimateInBox
      width="100%"
      overflow="scroll"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      position="fixed"
      top="0"
      bottom="0"
      left="0"
      right="0"
      zIndex="2"
      padding={['20px', '40px', '80px']}
      backgroundColor="var(--primary-bg-color)"
    >
      {children}
    </AnimateInBox>
  )
}

AnimatedModal.propTypes = {
  children: any,
  onClose: func,
}
