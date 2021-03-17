describe("Projects view", () => {
    beforeEach(()=>{
        cy.visit('projects#/projects')
    })

    it('Shows project card', () => {

        cy.get('.main > :nth-child(2) > .stackable > :nth-child(1)')
          .should('have.class', 'column')

    })

    it('New project modal form is controlled', () => {

        cy.get('.eight > .button')
          .click()
          
        cy.get(':nth-child(2) > .ui > input')
          .type('New project test')
          .should('have.value', 'New project test')

        cy.get('textarea')
          .type('Testing description')
          .should('have.value', 'Testing description')

        cy.get('#new-project')
          .click()
        })

        
        it('Creates project on submit', ()=> {


              cy.get('.main > :nth-child(2) > .stackable')
                .children()
                .should('have.length', 11)

            })

        it('Deletes project', () =>{

            cy.get(':nth-child(10) > .card > .extra > .left > :nth-child(2)')
              .click()

            cy.get('.primary')
              .click()

            cy.get('.main > :nth-child(2) > .stackable')
              .children()
              .should('have.length', 10)
        })
        // it('Logs in with correct credentials', ()=>{

        //     cy.get('#username-login')
        //       .type('santiago')

        //     cy.get('#password-login')
        //       .type('santiago')
        //       .type('{enter}')
            
        //     cy.get('.profile-card')
        //       .should('be.visible')
        // })

})