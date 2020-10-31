import React from 'react'
import styled from 'styled-components'
import { any, string } from 'prop-types'

import Box from './Box'
import Header from './Header'
import Text from './Text'

export const Section = ({ title, children }) => (
  <SectionBox id={title} paddingBottom={['40px', '60px', '80px']}>
    <SectionHeader>{title}</SectionHeader>
    <SectionBody>{children}</SectionBody>
  </SectionBox>
)

Section.propTypes = {
  title: string,
  children: any,
}

export const SectionBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`
export const SectionHeader = ({ children, ...rest }) => (
  <Header marginTop={['20px']} marginLeft={['20px', '40px', '60px']} {...rest}>
    {children}
  </Header>
)

SectionHeader.propTypes = {
  children: any,
}

export const SectionContent = ({ children, ...rest }) => {
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
