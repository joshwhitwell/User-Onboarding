//Form test
describe('User Onboarding Form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    //Element selector functions
    const getName = () => {
        return cy.get('#name-input')
    }

    const getNameError = () => {
        return cy.get('#name-error')
    }

    const getEmail = () => {
        return cy.get('#email-input')
    }

    const getEmailError = () => {
        return cy.get('#email-error')
    }

    const getPassword = () => {
        return cy.get('#password-input')
    }

    const getPasswordError = () => {
        return cy.get('#password-error')
    }

    const getTerms = () => {
        return cy.get('#terms-input')
    }

    const getTermsError = () => {
        return cy.get('#terms-error')
    }

    const getSubmitButton = () => {
        return cy.get('#submit-button')
    }

    const getSubmitButtonError = () => {
        return cy.get('#submit-error')
    }

    //Test variables
    const testName = 'test name'
    const testEmail = 'test@email.com'
    const testPassword = 'test password'

    //Name field test
    it('name field test', () => {
        getName()
            .should('have.value', '')//starts empty
        getNameError()
            .should('not.exist')//error message not visible
        getName()
            .type('a')
        getNameError()
            .should('exist')//error message visible
            .contains('Name must be at least 3 characters')//is correct message
        getName()
            .clear()//clear name
        getNameError()
            .contains('Name is required')//is correct message
        getName()
            .type(testName)//types test name
        getNameError()
            .should('not.exist')//error message is not visible
        getName()
            .clear()//clear name
    })

    //Email field test
    it('email field test', () => {
        getEmail()
            .should('have.value', '')//starts empty
        getEmailError()
            .should('not.exist')//error message not visible
        getEmail()
            .type('a')
        getEmailError()
            .should('exist')//error message visible
            .contains('Must be a valid email address')//is correct message
        getEmail()
            .clear()//clear email
        getEmailError()
            .contains('Email is required')//is correct message
        getEmail()
            .type(testEmail)//types test email
        getEmailError()
            .should('not.exist')//error message is not visible
        getEmail()
            .clear()//clear password
    })
    
    // //Password field test
    it('password field test', () => {
        getPassword()
            .should('have.value', '')//starts empty
        getPasswordError()
            .should('not.exist')//error message not visible
        getPassword()
            .type('a')
        getPasswordError()
            .should('exist')//error message visible
            .contains('Password must be at least 8 characters')//is correct message
        getPassword()
            .clear()//clear password
        getPasswordError()
            .contains('Password is required')//is correct message
        getPassword()
            .type(testPassword)//types test password
        getPasswordError()
            .should('not.exist')//error message is not visible
        getPassword()
            .clear()//clear password
    })

    // //Terms field test
    it('terms field test', () => {
        getTermsError()
            .should('not.exist')//error message not visible
        getTerms()
            .click()//click terms
        getTermsError()
            .should('not.exist')//error message not visible
        getTerms()
            .click()//unclick terms
        getTermsError()
            .should('exist')
            .contains('Must accept terms and conditions')
    })
})