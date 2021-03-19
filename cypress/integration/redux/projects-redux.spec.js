import store from '../../fixtures/store.json'
describe("Redux store users", () => {

  context('Loads whole application state', () => {
  
      it('has expected state on load', () => {
          cy.visit('/')
          cy.window().its('store').invoke('getState').snapshot()
          //.should('deep.equal', store)
  
        })
  
    })

context( 'Project redux', () => {

    it('Loads all projects', () => {
      cy.visit('/')

      const getProjects = (window) => window.store.getState().projects

      cy.window().pipe(getProjects).should('deep.equal', store.projects)
    })

    it('Adds a new project', () => {
      cy.visit('projects#/projects')

      cy.get('.eight > .button')
      .click()
      
      cy.get(':nth-child(2) > .ui > input')
        .type('New project test')
        .should('have.value', 'New project test')

      cy.get('textarea')
        .type('Testing description')
        .should('have.value', 'Testing description')

      cy.get('#new-project').click()

      const getProjects = (window) => window.store.getState().projects

      cy.window().pipe(getProjects).should('have.length', store.projects.length + 1)
    })

    it('Edits a project', () => {
        
    })

    it('Deletes a project', () => {
        cy.get(':nth-child(11) > .card > .extra > .left > :nth-child(2)')
          .click()

        cy.get('.primary')
          .click()

        const getProjects = (window) => window.store.getState().projects

        cy.window().pipe(getProjects).should('have.length', store.projects.length)
    })
})

})