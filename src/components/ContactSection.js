import React from 'react'
import { arrayOf } from 'prop-types'

import { Anchor } from './Link'
import { Section, SectionBody } from './Section'
import { ContactType } from '../types'

export const ContactSection = ({ contacts }) => (
  <Section id="contact" title="get in contact" data-cy="get-in-contact-section">
    <SectionBody scroll minHeight="50px" justifyContent="flex-start">
      {contacts.map(({ url, medium }, i) => (
        <Anchor
          key={i}
          external
          whiteSpace="nowrap"
          marginLeft={['20px', '40px', '60px']}
          url={url}
        >
          {medium}
        </Anchor>
      ))}
    </SectionBody>
  </Section>
)

ContactSection.propTypes = {
  contacts: arrayOf(ContactType).isRequired,
}
