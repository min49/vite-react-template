describe('App', () => {
  it('should display welcome message', () => {
    cy.visit('/')
    cy.findByRole('button', {name: /count is 0/i}).click()
    cy.findByRole('button', {name: /count is 1/i})
  })
})
