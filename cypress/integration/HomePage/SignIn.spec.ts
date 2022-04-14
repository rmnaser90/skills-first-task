import '@testing-library/cypress/add-commands'
describe('render home page', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.viewport('iphone-xr')
    })
    it('should render correctly', () => {
        const divElement = cy.findByText(/all your books in one place/i)
        divElement.should('exist')
    })

    it('should navigate to sign up page when clicking on get started', () => {
        const btnElement = cy.findByText(/get started/i)
        btnElement.click()
        cy.url().should("include", "signup")
    })
    it('should navigate to sign in page when clicking on login', () => {
        const btnElement = cy.findByText(/get started/i)
        btnElement.click()
        const loginSpan = cy.findByText(/login/i)
        loginSpan.click()
        cy.url().should("include", "signin")
    })
    it('text should change in inputs',async () => {
        const btnElement = cy.findByText(/get started/i)
        btnElement.click()
        const loginSpanElement = cy.findByText(/login/i)
        loginSpanElement.click()
        const emailInputElement = cy.findByPlaceholderText(/email address/i)
        emailInputElement.type("rami@monday.com")
        const passwordInputElement = cy.findByPlaceholderText(/password/i)
        passwordInputElement.type("qweqwe")
        const signInBtnElement = cy.findByText(/sign in/i)
        signInBtnElement.click()
        cy.url().should("not.include", "signin")
    })
})
