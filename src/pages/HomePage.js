import styled from 'styled-components'
import React from 'react'
import { any, string } from 'prop-types'

import Box from '../components/Box'
import Header from '../components/Header'

import content from '../content'
import Text from '../components/Text'

const Nav = styled.nav`
  > a {
    display: block;
    text-decoration: none;
  }
`

const Navigation = () => (
  <Nav>
    <a href="#who am i">
      <Text
        variant="medium"
        color="var(--primary-header-contrast-color)"
        glowColor="var(--primary-header-contrast-glow-color)"
      >
        - who am i
      </Text>
    </a>
    <a href="#what have i done">
      <Text
        variant="medium"
        color="var(--primary-header-contrast-color)"
        glowColor="var(--primary-header-contrast-glow-color)"
      >
        - what have i done
      </Text>
    </a>
  </Nav>
)

const Section = ({ title, height }) => (
  <SectionBox id={title} height={height}>
    <SectionHeader>{title}</SectionHeader>
  </SectionBox>
)

Section.propTypes = {
  title: string,
  height: string,
}

Section.defaultProps = {
  height: '100%',
}

const SectionBox = styled(Box)`
  min-height: ${({ height }) => height};
  display: flex;
  align-items: flex-start,
  justify-content: flex-start
`

const ProfileBox = styled(SectionBox)`
  background-image: linear-gradient(
      to bottom,
      transparent,
      var(--primary-bg-half-transparent-color),
      var(--primary-bg-color)
    ),
    url(assets/profile_small_portrait.jpeg);

  @media (min-width: 52em) and (orientation: portrait) {
    background-image: linear-gradient(
        to bottom,
        transparent,
        var(--primary-bg-half-transparent-color),
        var(--primary-bg-color)
      ),
      url(assets/profile_small_portrait.jpeg);
  }

  @media (min-width: 52em) and (orientation: landscape) {
    background-image: linear-gradient(
        to bottom,
        transparent,
        var(--primary-bg-half-transparent-color),
        var(--primary-bg-color)
      ),
      url(assets/profile_medium.jpeg);
  }

  @media (min-width: 64em) and (orientation: landscape) {
    background-image: linear-gradient(
        to bottom,
        transparent,
        var(--primary-bg-half-transparent-color),
        var(--primary-bg-color)
      ),
      url(assets/profile_large.jpeg);
  }

  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  ${Nav} {
    margin: 15px 0 0 40px;

    @media (min-width: 52em) and (orientation: portrait) {
      margin: 30px 0 0 80px;
    }

    @media (min-width: 64em) and (orientation: landscape) {
      margin: 100px 0 0 75px;
    }

    > a {
      margin-bottom: 5px;

      @media (min-width: 52em) and (orientation: landscape) {
        margin-bottom: 15px;
      }
    }
  }
`

const SectionHeader = ({ children, ...rest }) => (
  <Header
    paddingLeft={['5px', '20px,', '30px']}
    paddingTop={['30px', '40px,', '50px']}
    {...rest}
  >
    {children}
  </Header>
)

SectionHeader.propTypes = {
  children: any,
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
      <ProfileBox height="100%">
        <SectionHeader contrast>
          {content.me.name}
          <br />
          {content.me.title}
        </SectionHeader>
        <Navigation />
      </ProfileBox>
      <Section title="who am i" height="80%" />
      <Section title="what have i done" />
    </>
  )
}

export default HomePage
