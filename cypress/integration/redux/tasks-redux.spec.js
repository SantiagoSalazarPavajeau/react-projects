import store from '../../fixtures/store.json'
describe("Redux store users", () => {

context('Loads whole application state', () => {

    it('has expected state on load', () => {
        cy.visit('/')
        cy.window().its('store').invoke('getState').snapshot()
        // .should('deep.equal', store)

      })

  })

context( 'Tasks redux', () => {

    it('Loads all tasks', () => {
        cy.visit('/')

        const getTasks = (window) => window.store.getState().tasks

        cy.window().pipe(getTasks).snapshot()
        //.should('deep.equal', store.tasks)
    })

    it('Adds and deletes new task', () => {
        cy.visit('projects#/projects')
        cy.get(':nth-child(1) > .card > :nth-child(1) > .header').click()
        cy.get('.description > :nth-child(6)').click()

        cy.get(':nth-child(9) > .small > :nth-child(4)').click()

        const getTasks = (window) => window.store.getState().tasks

        cy.window().pipe(getTasks).should('have.length', store.tasks.length)
    })

    it('Edits a task', () => {
        cy.get('textarea')
          .type(' on linkedin')
          .should('have.value', 'Connect with 8 people a week on linkedin')
        
        cy.get('.small > :nth-child(2)').click()

        cy.get('textarea')
          .clear()
          .type('Connect with 8 people a week')
          .should('have.value', 'Connect with 8 people a week')
        
        cy.get('.small > :nth-child(2)').click()

    })
})

})