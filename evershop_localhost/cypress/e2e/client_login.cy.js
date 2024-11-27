describe('Logowanie klient', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/account/login')
  })
  it('Poprawne dane', () => {
    cy.login('client@wp.pl', 'client')
    cy.get('#loginForm').should('not.exist')
    cy.get('div.self-center').eq(1).click()
    cy.classContains('account-details-name', 'Client')
  })
  it('Błędne dane', () => {
    cy.login('client@gmail.com', 'Client123!')
    cy.classContains('text-critical', 'Invalid email or password')
  })
  it('Niepoprawny email', () => {
    cy.login('client', 'Client123!')
    cy.classContains('field-error', 'Invalid email')
  })
})