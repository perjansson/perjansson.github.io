import React from 'react'
import styled from 'styled-components'
import { any, string, bool } from 'prop-types'

import { Box } from './Box'
import { Header } from './Header'
import { Text } from './Text'

export const Section = ({ id, title, text, children, ...rest }) => (
  <SectionBox paddingBottom={['20px', '40px', '60px']} {...rest}>
    {title && <SectionHeader id={id}>{title}</SectionHeader>}
    {text && <SectionBody text={text} />}
    {children}
  </SectionBox>
)

Section.propTypes = {
  id: string.isRequired,
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

export const SectionBody = ({ scroll, text, children, ...rest }) => (
  <SectionContent
    scroll={scroll}
    marginTop={['10px', '20px', '30px']}
    marginBottom={['20px', '40px', '60px']}
    text={text}
    {...rest}
  >
    {children}
  </SectionContent>
)

SectionBody.propTypes = {
  scroll: bool,
  text: string,
  children: any,
}

export const SectionContent = ({ scroll, text, children, ...rest }) => {
  return (
    <Box
      width={1}
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      overflowX={scroll ? 'scroll' : 'hidden'}
      className={scroll ? 'scroll' : undefined}
      {...rest}
    >
      {text && (
        <Text
          variant="small"
          lineHeight={['28px', '36px', '44px']}
          color="var(--primary-header-color)"
          marginLeft={['20px', '40px', '60px']}
          marginRight={['20px', '40px', '60px']}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
      {children}
    </Box>
  )
}

SectionContent.propTypes = {
  scroll: bool,
  text: string,
  children: any,
}
