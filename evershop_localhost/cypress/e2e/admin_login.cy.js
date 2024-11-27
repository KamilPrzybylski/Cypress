describe('Logowanie admin', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/admin/login')
  })
  it('Poprawne dane', () => {
    cy.login('kamilmilu11@gmail.com', 'admin123')
    cy.get('.header').should('be.visible')
  })
  it('Błędne dane', () => {
    cy.login('admin@gmail.com', 'Admin123!')
    cy.classContains('text-critical', 'Invalid email or password')
  })
  it('Niepoprawny email', () => {
    cy.login('admin', 'Admin123!')
    cy.classContains('field-error', 'Invalid email')
  })
})