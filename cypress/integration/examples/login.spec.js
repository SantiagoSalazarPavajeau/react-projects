describe("Login form", () => {
    beforeEach(()=>{
        cy.visit('/')
    })


    it("focuses input on load", () => {

        cy.focused()
          .should('have.id', 'username-login')
    })

    it('accepts input', () => {

        const username = "santiago"
        cy.get('#username-login')
          .type(username)
          .should('have.value', username)
    })

    context('Login submission', () => {
        
        it('Shows error on incorrect credentials', ()=> {

            cy.get('#username-login')
              .type('santiag')

            cy.get('#password-login')
              .type('santiag')
              .type('{enter}')
            
            cy.get('#login-error')
              .should('be.visible')
        })

        it('Logs in with correct credentials', ()=>{

            cy.get('#username-login')
              .type('santiago')

            cy.get('#password-login')
              .type('santiago')
              .type('{enter}')
            
            cy.get('.profile-card')
              .should('be.visible')
        })


    })
})