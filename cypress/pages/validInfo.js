class validInfo {
    get missFieldInfo() {
        return cy.get("#zds-97")
    }

    get invalidEmailInfo() {
        return cy.get("#zds-77")
    }

    get shortPassInfo() {
        return cy.get("#zds-81")
    }

    get termsInfo() {
        return cy.get("#zds-1976")
    }

    get valueInfo() {
        return cy.get("#zds-85")
    }

    get logEmailValidInfo() {
        return cy.get("#zds-19")
    }

    get logMissingPassInfo() {
        return cy.get("#zds-23")
    }
    
}

export default new validInfo()