import React, { useState } from 'react'
import { arrayOf, func } from 'prop-types'

import { ProjectType } from '../types'
import { Section, SectionSubHeader } from './Section'
import { Box } from './Box'
import { Text } from './Text'
import { BackgroundBox } from './BackgroundBox'
import { Project } from './Project'

export const ProjectsSection = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(undefined)

  return (
    <>
      <Section
        id="projects"
        title="what have i done"
        data-cy="what-have-i-done-section"
      >
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-around"
          marginTop={['10px', '20px', '30px']}
          paddingLeft={['10px', '15px']}
          paddingRight={['10px', '15px']}
        >
          {projects.map((project, i) => (
            <ProjectBox
              key={i}
              project={project}
              onSelectProject={() => setSelectedProject(project)}
            />
          ))}
        </Box>
      </Section>
      {selectedProject && (
        <Project
          project={selectedProject}
          onClose={() => setSelectedProject(undefined)}
        />
      )}
    </>
  )
}

ProjectsSection.propTypes = {
  projects: arrayOf(ProjectType).isRequired,
}

const ProjectBox = ({ project, onSelectProject }) => (
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
      cursor="pointer"
      onClick={onSelectProject}
    >
      <Box width="90%">
        {project.date && (
          <Text
            position="absolute"
            top="20px"
            left="20px"
            padding="10px"
            bg="var(--project-date-background-color)"
            borderRadius="10px"
            variant="xSmall"
            noSizeScale
          >
            {project.date}
          </Text>
        )}
        <SectionSubHeader textAlign="center" fadeIn={false} noSizeScale>
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
  onSelectProject: func,
}
