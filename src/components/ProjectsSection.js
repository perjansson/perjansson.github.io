import React from 'react'
import { arrayOf } from 'prop-types'

import { ProjectType } from '../types'
import { Section, SectionSubHeader } from './Section'
import { Box } from './Box'
import { Text } from './Text'
import { BackgroundBox } from './BackgroundBox'

export const ProjectsSection = ({ projects }) => (
  <Section title="what have i done" data-cy="what-have-i-done-section">
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="space-around"
      marginTop={['10px', '20px', '30px']}
      paddingLeft={['10px', '15px']}
      paddingRight={['10px', '15px']}
    >
      {projects.map((project, i) => (
        <ProjectBox key={i} project={project} />
      ))}
    </Box>
  </Section>
)

ProjectsSection.propTypes = {
  projects: arrayOf(ProjectType).isRequired,
}

const ProjectBox = ({ project }) => (
  <BackgroundBox
    key={project.title}
    gradientType="full"
    asset={`projects/${project.asset}`}
    flex={['1 0 90%', '1 0 45%', '1 0 30%']}
    height={['90vw', '45vw', '30vw']}
    marginBottom={['20px', '30px']}
    marginLeft={['10px', '15px']}
    marginRight={['10px', '15px']}
  >
    <Box
      height="100%"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Box width="90%">
        {project.date && (
          <Text
            position="absolute"
            top="20px"
            left="20px"
            padding="10px"
            bg="rgba(0,0,0,0.4)"
            borderRadius="10px"
            variant="xSmall"
            noSizeScale
          >
            {project.date}
          </Text>
        )}
        <SectionSubHeader textAlign="center" noSizeScale>
          {project.title}
        </SectionSubHeader>
        <Text
          variant="small"
          marginTop={['10px', '20px', '30px']}
          textAlign="center"
          noSizeScale
        >
          {project.role}
        </Text>
      </Box>
    </Box>
  </BackgroundBox>
)

ProjectBox.propTypes = {
  project: ProjectType.isRequired,
}
