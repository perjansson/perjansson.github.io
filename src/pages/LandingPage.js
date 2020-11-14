import React, { useEffect, useState } from 'react'
import { func } from 'prop-types'

import content from '../content'
import { Box } from '../components/Box'
import { BlackMirror } from '../components/BlackMirror'
import { Link } from '../components/Link'

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
        <BlackMirror>{content.me.name}</BlackMirror>
      </Box>
      <Box
        width="100%"
        height="10%"
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        {showLink && (
          <Link data-cy="enter-link" onClick={onClick} cursor="pointer">
            Click anywhere to enter...
          </Link>
        )}
      </Box>
    </>
  )
}

LandingPage.propTypes = {
  onClick: func,
}

export default LandingPage
