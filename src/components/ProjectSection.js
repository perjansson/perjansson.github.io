import React from 'react'

import { ProjectType } from '../types'
import { Box } from './Box'
import { Header } from './Header'
import { Text } from './Text'
import { BackgroundBox } from './BackgroundBox'

export const ProjectSection = ({ project }) => (
  <BackgroundBox
    asset={`../../assets/projects/${project.asset}`}
    cover
    gradientType="full"
    tone="dark"
    padding={['20px', '40px', '60px']}
    minHeight="100vh"
  >
    <Box
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      marginBottom={['20px', '60px', '120px']}
    >
      <Header fadeIn={false}>{project.title}</Header>
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
  </BackgroundBox>
)

ProjectSection.propTypes = {
  project: ProjectType,
}
