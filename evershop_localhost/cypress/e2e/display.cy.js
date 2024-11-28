describe('Poprawność wyświetlania stron', () => {
  describe('Strona główna', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
    it('Header', () => {
      cy.classContains('header', 'Shop ❤️')

      cy.classContains('header', 'About us')
    })
    it('Content', () => {
      cy.classContains('content', 'CDELER')
      cy.classContains('content', 'The best dealer')
      cy.classContains('content', 'SHOP NOW')

      cy.classContains('content', 'Cars')
      cy.classContains('content', 'The best cars')
      cy.classContains('content', 'Shop cars')
      
      cy.classContains('content', 'Tractors')
      cy.classContains('content', 'The best tractors')
      cy.classContains('content', 'Shop tractors')
      
      cy.classContains('content', 'Lawnmowers')
      cy.classContains('content', 'The best lawnmowers')
      cy.classContains('content', 'Shop lawnmowers')

      cy.classContains('content', 'Featured Products')
    })
    it('Footer', () => {
      cy.classContains('footer', '© 2022 Evershop. All Rights Reserved.')
    })
  })

  describe('Strona produktu', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/car/penera')
    })
    it('Content', () => {
      cy.classContains('breadcrumb', 'Home / Car / Penera')
      cy.classContains('product-detail', 'Penera')
      cy.classContains('product-detail', '$2,000.00')
      cy.classContains('product-detail', 'Sku: P-0001')
      cy.classContains('product-detail', 'ADD TO CART')
    })
  })

  describe('Strona admina', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/admin')
    })
    it('Content', () => {
      cy.classContains('admin-login-form', 'Email')
      cy.classContains('admin-login-form', 'Password')
      cy.classContains('admin-login-form', 'SIGN IN')
    })
  })
})