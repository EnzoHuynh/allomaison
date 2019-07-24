/// <reference types="Cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/')
    cy.get('.navbar-brand .navbar-item').click()
    cy.get('.button.is-primary').click()
    cy
      .get('input[type="email"]')
      .invoke('text')  // for input or textarea, .invoke('val')
      .then(text => {
        const someText = text;
        cy.log(someText);
      });
      cy.get('.button.is-success').click()
  })

  it('cy.reload() - reload the page', () => {
    // https://on.cypress.io/reload
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

  it('cy.visit() - visit a remote url', () => {

    // Pass options to the visit
    cy.visit('http://localhost:3001/', {
      timeout: 50000, // increase total time for the visit to resolve
      onBeforeLoad (contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
      onLoad (contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
    })
    })
})
