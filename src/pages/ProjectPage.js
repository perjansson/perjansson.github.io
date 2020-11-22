import React from 'react'
import { string } from 'prop-types'

import content from '../content'
import { ProjectSection } from '../components/ProjectSection'

const ProjectPage = ({ projectId }) => {
  const project = content.projects.find(
    ({ id }) => id === parseInt(projectId, 10)
  )
  return <ProjectSection project={project} />
}

ProjectPage.propTypes = {
  projectId: string,
}

export default ProjectPage
