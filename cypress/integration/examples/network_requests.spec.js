/// <reference types="cypress" />

context('Network Requests', () => {

  // Manage HTTP requests

  it('cy.request() - make an XHR request', () => {
    // https://on.cypress.io/request
    cy.request('https://secure-shelf-48338.herokuapp.com/people')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      })
  })

  it('cy.request() - verify response using BDD syntax', () => {
    cy.request('https://secure-shelf-48338.herokuapp.com/people')
    .then((response) => {
      expect(response).property('status').to.equal(200)
      expect(response).to.include.keys('headers', 'duration')
    })
  })

  it('cy.request() with expected results', () => {
    // will execute request
    // https://jsonplaceholder.cypress.io/comments?postId=1&id=3
    cy.request({
      url: 'https://secure-shelf-48338.herokuapp.com/people/'
    })
    .its('body.data')
    .should('be.an', 'array')
    .and('have.length', 4)
    .its('0') // yields first element of the array
    .should('be.an', 'object')
  })

  it('cy.request() - pass result to the second request', () => {
    // first, let's find out the userId of the first user we have
    cy.request('https://secure-shelf-48338.herokuapp.com/people/')
      .its('body.data') // yields the response object
      .its('0') // yields the first element of the returned list
      // the above two commands its('body').its('0')
      // can be written as its('body.0')
      // if you do not care about TypeScript checks
      .then((user) => {
        expect(user).property('attributes').to.be.an('object')
      })
  })
})
