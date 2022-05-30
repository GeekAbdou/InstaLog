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
    it('Checks for correct email & password', () => {
        cy.visit('/login')
        cy.get('[data-cy=email]').type('mohamed@instabug.com')
        cy.get('[data-cy=password]').type('A12345678')
        cy.get('[data-cy=logBtn]').click()
        cy.get('[data-cy=welMessage]').contains('Welcome, mohamed@instabug.com')
    })
})

describe('Scenario 4', () => {
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

describe('Scenario 5', () => {
    it('Checks for wrong password length', () => {
        cy.visit('/login')
        cy.get('[data-cy=password]').type('1234567')
        cy.get('[data-cy=errorMessage]')
            .contains('Password must be 8 characters or more.')
            .should('have.css', 'color', 'rgb(255, 0, 0)')
        cy.get('[data-cy=password]').should(
            'have.css',
            'border-color',
            'rgb(255, 0, 0)'
        )
    })
})

describe('Scenario 6', () => {
    it('Checks for disable button till email and password have accepted rules', () => {
        cy.visit('/login')
        cy.get('[data-cy=email]').type('mohamed@instabug.com')
        cy.get('[data-cy=logBtn]').should('be.disabled')
        cy.get('[data-cy=password]').type('123456')
        cy.get('[data-cy=logBtn]').should('be.disabled')
        cy.get('[data-cy=password]').type('78')
        cy.get('[data-cy=logBtn]').should('be.enabled')
    })
})

describe('Scenario 7', () => {
    it('Checks logout functionality', () => {
        cy.visit('/login')
        cy.get('[data-cy=email]').type('mohamed@instabug.com')
        cy.get('[data-cy=password]').type('A12345678')
        cy.get('[data-cy=logBtn]').click()
        cy.get('[data-cy=welMessage]').contains('Welcome, mohamed@instabug.com')
        cy.get('[data-cy=logoutBtn]').click()
        cy.url().should('include', '/login')
    })
})

describe('Scenario 8', () => {
    it('Checks 404 Not Found redirects', () => {
        cy.visit('/doesnotexist')
        cy.url().should('include', '/404')
    })
})

describe('Scenario 9', () => {
    it('Checks autologin', () => {
        cy.visit('/login')
        cy.get('[data-cy=email]').type('mohamed@instabug.com')
        cy.get('[data-cy=password]').type('A12345678')
        cy.get('[data-cy=logBtn]').click()
        cy.get('[data-cy=welMessage]').contains('Welcome, mohamed@instabug.com')
        cy.visit('/login')
        cy.url().should('include', '/welcome')
    })
})

describe('Scenario 10', () => {
    it('Checks Slide Picker', () => {
        cy.visit('/login')
        cy.get('[data-cy=slidePicker] > span').last().click()
        cy.get('[data-cy=slidePicker] > span')
            .last()
            .should(
                'have.class',
                'slider-section__carousel__pagination__picker--active'
            )
    })
})
