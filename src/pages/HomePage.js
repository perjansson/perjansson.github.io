import React from 'react'
import styled from 'styled-components'
import { string, oneOf } from 'prop-types'

import content from '../content'
import { NavLink, Nav } from '../components/Navigation'
import {
  Section,
  SectionBox,
  SectionHeader,
  SectionSubHeader,
} from '../components/Section'
import Box from '../components/Box'
import Text from '../components/Text'

const BackgroundGradient = {
  toBottom:
    'linear-gradient(to bottom, transparent, var(--primary-bg-half-transparent-color), var(--primary-bg-color))',
  full:
    'linear-gradient(to bottom, var(--primary-bg-half-transparent-color), var(--primary-bg-half-transparent-color))',
}

const BackgroundBox = styled(SectionBox)`
  background-image: ${({ asset, gradientType }) =>
    BackgroundGradient[gradientType] +
    ', url(assets/' +
    asset +
    '_small' +
    (asset === 'profile' ? '_portrait' : '') +
    '.jpg)'};

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
  opacity: ${({ asset }) => (asset === 'profile' ? 1.0 : 0.85)};
  transition: all 0.2s ease-in-out;
  z-index: 1;

  &:hover {
    opacity: 1;
    transform: ${({ asset }) =>
      asset === 'profile' ? 'scale(1.0)' : 'scale(1.05)'};
    z-index: 2;
  }

  ${Nav} {
    margin-bottom: 50px;

    > a {
      margin-bottom: 5px;

      @media (min-width: 52em) and (orientation: landscape) {
        margin-bottom: 15px;
      }
    }
  }
`

BackgroundBox.propTypes = {
  asset: string,
  gradientType: oneOf(['toBottom', 'full']),
}

BackgroundBox.defaultProps = {
  gradientType: 'toBottom',
}

const ProjectType = {
  title: string,
  role: string,
  date: string,
  asset: string,
}

const ProjectBox = ({ project }) => (
  <BackgroundBox
    key={project.title}
    gradientType="full"
    asset={`projects/${project.asset}`}
    flex={['1 0 90%', '1 0 45%']}
    height={['100vw', '50vw']}
    marginBottom="10px"
    marginLeft={['0', '5px']}
    marginRight={['0', '5px']}
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
          >
            {project.date}
          </Text>
        )}
        <SectionSubHeader textAlign="center">{project.title}</SectionSubHeader>
        <Text
          variant="medium"
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
  project: ProjectType,
}

const HomePage = () => {
  // const onThemeChange = () => {
  //   const elem = document.documentElement
  //   elem.setAttribute(
  //     'data-theme',
  //     elem.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  //   )
  // }

  return (
    <>
      <BackgroundBox
        asset="profile"
        height="100vh"
        justifyContent={['space-between', 'space-between']}
      >
        <SectionHeader maxWidth={['90%', '80%', '60%']}>
          {content.me.name}
          <br />
          {content.me.title}
        </SectionHeader>
        <NavLink
          href="#who am i"
          marginLeft={['20px', '40px', '60px']}
          marginBottom={['140px', '40px']}
        >
          Read more{' '}
          <span role="img" aria-label="point down">
            👇
          </span>
        </NavLink>
      </BackgroundBox>
      <Section title="who am i" text={content.me.long} />
      <Section title="what have i done">
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-around"
          width="100%"
        >
          {content.projects.map((project, i) => (
            <ProjectBox key={i} project={project} />
          ))}
        </Box>
      </Section>
    </>
  )
}

export default HomePage
