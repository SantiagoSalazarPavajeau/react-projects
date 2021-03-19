import store from '../../fixtures/store.json'

// const URL = 'http://localhost:3001/'
const URL = 'https://secure-shelf-48338.herokuapp.com'

describe("Redux store users", () => {

  beforeEach(()=>{
      cy.visit('')
  })

  context('Loads whole application state', () => {

    it('has expected state on load', () => {
        cy.visit('/')
        cy.window().its('store').invoke('getState').should('deep.equal', store)

      })

  })

  context( 'User redux', () => {

    it('Loads all users', () => {
      cy.visit('/')
      
      cy.request(`${URL}/people`)
        .then((response) => {
          expect(response.status).to.eq(200)
          cy.window().its('store').invoke('getState').its('people').should('deep.equal', store.people)
        })
    })

    it('Adds a new user', () => {

      cy.visit('/')
      cy.get('[href="#/signup"]').click()
      cy.get(':nth-child(3) > .ui > input').type('Javi')
      cy.get(':nth-child(6) > .ui > input').type('12345')
      cy.get('[type="submit"]').click()

      const getPeople = (window) => window.store.getState().people

      
      cy.window().pipe(getPeople).should('have.length', 5)
    })

    it('Deletes a user', () => {
      cy.visit('/')
      cy.get('#username-login').type('Javi') 
      cy.get('#password-login').type('12345')
      cy.get('[type="submit"]').click()

      cy.contains('Delete my Account').click()

      const getPeople = (win) => win.store.getState().people

      cy.window().pipe(getPeople).should('have.length', 4)
    })
})
})

