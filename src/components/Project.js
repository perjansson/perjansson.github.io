import React, { useEffect } from 'react'
import styled from 'styled-components'
import { func } from 'prop-types'

import { ProjectType } from '../types'
import { Box } from './Box'
import { Header } from './Header'
import { Text } from './Text'
import { puffIn } from '../styles/animations'

const AnimateInBox = styled(Box)`
  animation: ${puffIn} 0.4s cubic-bezier(0.47, 0, 0.745, 0.715) both;
`

export const Project = ({ project, onClose }) => {
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
      height="100%"
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
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        marginBottom={['20px', '60px', '120px']}
      >
        <Header fadeIn={false}>{project.title}</Header>
        <Text
          variant="large"
          onClick={onClose}
          cursor="pointer"
          margin={['10px', '20px', '40px']}
        >
          X
        </Text>
      </Box>

      <Header
        fadeIn={false}
        textVariant="medium"
        marginBottom={['10px', '20px', '30px']}
      >
        Project description
      </Header>
      <Text
        dangerouslySetInnerHTML={{
          __html: project.description,
        }}
        marginBottom={['20px', '40px', '60px']}
      />

      <Header
        fadeIn={false}
        textVariant="medium"
        marginBottom={['10px', '20px', '30px']}
      >
        My role
      </Header>
      <Text marginBottom={['20px', '40px', '60px']}>{project.me}</Text>

      <Header
        fadeIn={false}
        textVariant="medium"
        marginBottom={['10px', '20px', '30px']}
      >
        Tech
      </Header>
      <Text>{project.tags.join(', ')}</Text>
    </AnimateInBox>
  )
}

Project.propTypes = {
  project: ProjectType,
  onClose: func,
}
