import React, { useEffect, useState } from 'react'
import { func } from 'prop-types'

import Box from '../components/Box'
import BlackMirror from '../components/BlackMirror'
import Text from '../components/Text'

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
        {showLink && (
          <Text paddingRight="40px" color="var(--link-color)">
            Click anywhere to enter...
          </Text>
        )}
      </Box>
    </>
  )
}

LandingPage.propTypes = {
  onClick: func,
}

export default LandingPage
