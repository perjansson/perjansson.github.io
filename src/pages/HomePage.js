import styled from 'styled-components'
import React from 'react'
import { layout, space } from 'styled-system'
import { any, string } from 'prop-types'

import Box from '../components/Box'
import Header from '../components/Header'

import content from '../content'
import Text from '../components/Text'

const Nav = styled.nav`
  ${space}
  ${layout}
  > a {
    display: block;
    text-decoration: none;
  }
`

const Navigation = () => (
  <Nav
    marginTop={['40px', '60px', '80px']}
    marginLeft={['40px', '60px', '80px']}
  >
    <a href="#who am i">
      <Text
        variant="medium"
        color="var(--primary-header-contrast-color)"
        glowColor="var(--primary-header-contrast-glow-color)"
      >
        who am i
      </Text>
    </a>
    <a href="#what have i done">
      <Text
        variant="medium"
        color="var(--primary-header-contrast-color)"
        glowColor="var(--primary-header-contrast-glow-color)"
      >
        what have i done
      </Text>
    </a>
  </Nav>
)

const Section = ({ title, children }) => (
  <SectionBox id={title} paddingBottom={['40px', '60px', '80px']}>
    <SectionHeader>{title}</SectionHeader>
    <SectionBody>{children}</SectionBody>
  </SectionBox>
)

Section.propTypes = {
  title: string,
  children: any,
}

const SectionBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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
    > a {
      margin-bottom: 5px;

      @media (min-width: 52em) and (orientation: landscape) {
        margin-bottom: 15px;
      }
    }
  }
`

const SectionHeader = ({ children, ...rest }) => (
  <Header marginTop={['20px']} marginLeft={['20px', '40px', '60px']} {...rest}>
    {children}
  </Header>
)

SectionHeader.propTypes = {
  children: any,
}

const SectionContent = ({ children, ...rest }) => {
  return (
    <Box
      width={1}
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      {...rest}
    >
      <Text
        variant="medium"
        color="var(--primary-header-color)"
        width={['90%', '80%', '80%']}
        dangerouslySetInnerHTML={{ __html: children }}
      ></Text>
    </Box>
  )
}

SectionContent.propTypes = {
  children: any,
}

const SectionBody = ({ children }) => (
  <SectionContent
    marginTop={['20px', '40px', '60px']}
    marginBottom={['20px', '40px', '60px']}
  >
    {children}
  </SectionContent>
)

SectionBody.propTypes = {
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
        <SectionHeader maxWidth="90%">
          {content.me.name}
          <br />
          {content.me.title}
        </SectionHeader>
        <Navigation />
      </ProfileBox>
      <Section title="who am i">{content.me.long}</Section>
      <Section title="what have i done" />
    </>
  )
}

export default HomePage
