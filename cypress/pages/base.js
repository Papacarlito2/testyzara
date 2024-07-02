class base {
    openHomePage() {
        cy.visit('/', {
            headers: {
                'User-Agent': "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36"
            }
        })
    }

    get login() {
        return cy.get('a[data-qa-id="header-logon-link"]')
    }

    get reg() {
        return cy.get('button[data-qa-action="logon-view-alternate-button"]')
    }

    get cookies() {
        return cy.get("#onetrust-accept-btn-handler")
    }

    get hamburgerIcon() {
        return cy.get('button[data-qa-id="layout-header-toggle-menu"]')
    }
}

export default new base()