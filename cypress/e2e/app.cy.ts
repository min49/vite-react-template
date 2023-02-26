describe('App', () => {
  it('should display welcome message', () => {
    cy.visit('/profile')
    cy.contains('Hello World!')
  })
})
