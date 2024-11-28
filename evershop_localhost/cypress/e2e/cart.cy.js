describe('Cart', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('Dodawanie produktu do koszyka', () => {
    cy.get('.product-name>a').click()
    cy.get('button').click()
    cy.get('.add-cart-popup-button').click()
    cy.get('.content').should('not.contain', 'Your cart is empty!')
  })
  it('Usuwanie produktu', () => {
    cy.get('.product-name>a').click()
    cy.get('button').click()
    cy.get('.add-cart-popup-button').click()
    cy.get('.content').should('not.contain', 'Your cart is empty!')
    cy.get('button').eq(2).click()
    cy.get('.content').should('contain', 'Your cart is empty!')
  })
})