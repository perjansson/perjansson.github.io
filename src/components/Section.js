import React from 'react'
import styled from 'styled-components'
import { any, string } from 'prop-types'

import Box from './Box'
import Header from './Header'
import Text from './Text'

export const Section = ({ title, text, children }) => (
  <SectionBox id={title} paddingBottom={['20px', '40px', '60px']}>
    {title && <SectionHeader>{title}</SectionHeader>}
    {text && <SectionBody text={text} />}
    {children}
  </SectionBox>
)

Section.propTypes = {
  title: string,
  text: string,
  children: any,
}

export const SectionBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const SectionHeader = ({ children, ...rest }) => (
  <Header
    marginTop={['40px', '50px', '60px']}
    marginBottom={['20px']}
    marginLeft={['20px', '40px', '60px']}
    textTransform="lowercase"
    {...rest}
  >
    {children}
  </Header>
)

SectionHeader.propTypes = {
  children: any,
}

export const SectionSubHeader = ({ children, ...rest }) => (
  <Header marginTop={['20px']} textVariant="large" glow={false} {...rest}>
    {children}
  </Header>
)

SectionSubHeader.propTypes = {
  children: any,
}

export const SectionBody = ({ text, children }) => (
  <SectionContent
    marginTop={['10px', '20px', '30px']}
    marginBottom={['20px', '40px', '60px']}
    text={text}
  >
    {children}
  </SectionContent>
)

SectionBody.propTypes = {
  text: string,
  children: any,
}

export const SectionContent = ({ text, children, ...rest }) => {
  return (
    <Box
      width={1}
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      {...rest}
    >
      {text && (
        <Text
          variant="small"
          lineHeight={['28px', '36px', '44px']}
          color="var(--primary-header-color)"
          width={['90%', '80%', '80%']}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
      {children}
    </Box>
  )
}

SectionContent.propTypes = {
  text: string,
  children: any,
}
