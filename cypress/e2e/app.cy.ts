describe('App', () => {
  it('should display welcome message', () => {
    cy.visit('/')
    cy.contains('Hello World!')
  })
})
