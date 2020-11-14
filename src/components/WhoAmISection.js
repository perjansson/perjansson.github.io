import React from 'react'

import { MeType } from '../types'
import { Section } from './Section'

export const WhoAmISection = ({ me }) => (
  <Section
    id="whoami"
    title="who am i"
    text={me.long}
    data-cy="who-am-i-section"
  />
)

WhoAmISection.propTypes = {
  me: MeType.isRequired,
}
