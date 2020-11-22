import content from '../../src/content'

describe('Smoke test', () => {
  it('works', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-cy=enter-link]', { timeout: 10000 }).click()

    cy.get('body').contains(content.me.name)
    cy.get('body').contains(content.me.title)

    cy.get('[data-cy=who-am-i-section').scrollIntoView()
    cy.get('[data-cy=who-am-i-section]').contains('curious software developer')

    cy.get('[data-cy=get-in-contact-section').scrollIntoView()
    content.me.contacts.forEach(contact => {
      cy.get('[data-cy=get-in-contact-section').contains(contact.medium)
    })

    cy.get('[data-cy=what-have-i-done-section').scrollIntoView()
    content.projects.forEach(project => {
      cy.get('[data-cy=what-have-i-done-section').contains(project.title)
    })
  })
})
