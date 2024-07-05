class validInfo {
    get missFieldInfo() {
        return cy.get("#zds-102")
    }

    get invalidEmailInfo() {
        return cy.get("#zds-82")
    }

    get shortPassInfo() {
        return cy.get("#zds-86")
    }

    get termsInfo() {
        return cy.get("#zds-1981")
    }

    get valueInfo() {
        return cy.get("#zds-90")
    }

    get logEmailValidInfo() {
        return cy.get("#zds-20")
    }

    get logMissingPassInfo() {
        return cy.get("#zds-24")
    }
    
}

export default new validInfo()