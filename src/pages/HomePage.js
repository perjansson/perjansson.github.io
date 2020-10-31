import React from 'react'
import styled from 'styled-components'

import content from '../content'
import { Navigation, Nav } from '../components/Navigation'
import { Section, SectionBox, SectionHeader } from '../components/Section'

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
