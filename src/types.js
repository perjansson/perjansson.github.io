import { shape, string, arrayOf } from 'prop-types'

export const ContactType = shape({
  medium: string,
  url: string,
})

export const ProjectType = shape({
  title: string,
  description: string,
  me: string,
  role: string,
  date: string,
  tags: arrayOf(string),
})

export const MeType = shape({
  name: string,
  title: string,
  contacts: arrayOf(ContactType),
  short: string,
  long: string,
})
