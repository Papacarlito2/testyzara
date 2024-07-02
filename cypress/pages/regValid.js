class regValid {
    get regEmail() {
        return cy.get('input[data-qa-input-qualifier="email"]')
    }

    get regPass() {
        return cy.get('input[data-qa-input-qualifier="password"]')
    }

    get firstName() {
        return cy.get('input[data-qa-input-qualifier="firstName"]')
    }

    get lastName() {
        return cy.get('input[data-qa-input-qualifier="lastName"]')
    }

    get privCheck() {
        return cy.get('input[data-qa-input-qualifier="privacyCheck"]')
    }

    get telNumber() {
        return cy.get('input[data-qa-input-qualifier="phone.number"]')
    }

    get regButton() {
        return cy.get(".zds-button__lines-wrapper span")
    }

    typeAndCheckLength(field, value) {
        field.type(value).invoke("val").should("have.length.greaterThan", 60);
    }
}

export default new regValid()