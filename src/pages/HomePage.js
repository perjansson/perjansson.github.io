import styled from 'styled-components'
import React from 'react'
import Box from '../components/Box'

import Header from '../components/Header'

const ProfileBox = styled(Box)`
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
      <ProfileBox
        minHeight="100%"
        display="flex"
        alignItems="flex-end"
        justifyContent="flex-start"
      >
        <Header
          paddingLeft={['5px', '20px,', '30px']}
          paddingBottom={['30px', '40px,', '50px']}
        >
          per jansson
          <br />
          fullstack web developer
        </Header>
      </ProfileBox>
    </>
  )
}

export default HomePage
