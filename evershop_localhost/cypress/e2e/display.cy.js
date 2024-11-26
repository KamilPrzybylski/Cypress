describe('Poprawność wyświetlania stron', () => {
  describe('Strona główna', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
    it('Header', () => {
      cy.selectorContains('header', 'Shop ❤️')

      cy.selectorContains('header', 'About us')
    })
    it('Content', () => {
      cy.selectorContains('content', 'CDELER')
      cy.selectorContains('content', 'The best dealer')
      cy.selectorContains('content', 'SHOP NOW')

      cy.selectorContains('content', 'Cars')
      cy.selectorContains('content', 'The best cars')
      cy.selectorContains('content', 'Shop cars')
      
      cy.selectorContains('content', 'Tractors')
      cy.selectorContains('content', 'The best tractors')
      cy.selectorContains('content', 'Shop tractors')
      
      cy.selectorContains('content', 'Lawnmowers')
      cy.selectorContains('content', 'The best lawnmowers')
      cy.selectorContains('content', 'Shop lawnmowers')

      cy.selectorContains('content', 'Featured Products')
    })
    it('Footer', () => {
      cy.selectorContains('footer', '© 2022 Evershop. All Rights Reserved.')
    })
  })

  describe('Strona produktu', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/car/penera')
    })
    it('Content', () => {
      cy.selectorContains('breadcrumb', 'Home / Car / Penera')
      cy.selectorContains('product-detail', 'Penera')
      cy.selectorContains('product-detail', '$2,000.00')
      cy.selectorContains('product-detail', 'Sku: P-0001')
      cy.selectorContains('product-detail', 'Color: Silver')
      cy.selectorContains('product-detail', 'ADD TO CART')
    })
  })

  describe('Strona admina', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/admin')
    })
    it('Content', () => {
      cy.selectorContains('admin-login-form', 'Email')
      cy.selectorContains('admin-login-form', 'Password')
      cy.selectorContains('admin-login-form', 'SIGN IN')
    })
  })
})