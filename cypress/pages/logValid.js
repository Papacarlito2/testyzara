class logValid {
    get logEmail() {
        return cy.get('input[data-qa-input-qualifier="logonId"]')
    }

    get logPass() {
        return cy.get('input[data-qa-input-qualifier="password"]')
    }

    get logButton() {
        return cy.get('button[data-qa-action="logon-form-submit"]')
    }
}

export default new logValid()