describe('Scenario 1', () => {
    it('Checks for wrong email & password', () => {
        cy.visit('/login')
        cy.get('[data-cy=email]').type('email@doesnot.exist')
        cy.get('[data-cy=password]').type('wrongpassword')
        cy.get('[data-cy=logBtn]').click()
        cy.get('.login-wrapper__login-form__alert').contains(
            'Your email and/or password are incorrect!'
        )
    })
})

describe('Scenario 2', () => {
    it('Checks for correct email & wrong password', () => {
        cy.visit('/login')
        cy.get('[data-cy=email]').type('mohamed@instabug.com')
        cy.get('[data-cy=password]').type('wrongpassword')
        cy.get('[data-cy=logBtn]').click()
        cy.get('[data-cy=logAlert]').contains(
            'Your email and/or password are incorrect!'
        )
    })
})

describe('Scenario 3', () => {
    it('Checks for wrong email format', () => {
        cy.visit('/login')
        cy.get('[data-cy=email]').type('wrongEmail')
        cy.get('[data-cy=errorMessage]')
            .contains('Enter a valid email address.')
            .should('have.css', 'color', 'rgb(255, 0, 0)')
        cy.get('[data-cy=email]').should(
            'have.css',
            'border-color',
            'rgb(255, 0, 0)'
        )
    })
})
