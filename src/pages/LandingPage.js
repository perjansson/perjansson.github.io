import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { func } from 'prop-types'

import Box from '../components/Box'
import BlackMirror from '../components/BlackMirror'
import Text from '../components/Text'
import { fadeIn } from '../styles/animations'

const ContinueLink = styled(Text)`
  padding-right: 40px;
  color: var(--link-color);
  opacity: 0;
  animation: ${fadeIn} 250ms ease-in forwards;
`

const LandingPage = ({ onClick }) => {
  const [showLink, setShowLink] = useState(false)

  useEffect(() => {
    const id = window.setTimeout(() => setShowLink(true), 3500)
    return () => window.clearTimeout(id)
  }, [])

  return (
    <>
      <Box
        width="100%"
        height="90%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        onClick={onClick}
        cursor="pointer"
      >
        <BlackMirror>Per Jansson</BlackMirror>
      </Box>
      <Box
        width="100%"
        height="10%"
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        {showLink && <ContinueLink>Click anywhere to enter...</ContinueLink>}
      </Box>
    </>
  )
}

LandingPage.propTypes = {
  onClick: func,
}

export default LandingPage
