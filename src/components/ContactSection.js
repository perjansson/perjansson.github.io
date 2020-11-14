import React from 'react'
import { arrayOf } from 'prop-types'

import { Link } from './Link'
import { Section, SectionBody } from './Section'
import { ContactType } from '../types'

export const ContactSection = ({ contacts }) => (
  <Section title="get in contact" data-cy="get-in-contact-section">
    <SectionBody scroll minHeight="50px" justifyContent="flex-start">
      {contacts.map(({ url, medium }, i) => (
        <Link key={i} whiteSpace="nowrap" marginLeft={['20px', '40px', '60px']}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {medium}
          </a>
        </Link>
      ))}
    </SectionBody>
  </Section>
)

ContactSection.propTypes = {
  contacts: arrayOf(ContactType).isRequired,
}
