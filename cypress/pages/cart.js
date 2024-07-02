class cart {
    get productCategory() {
        return cy.get('a[data-qa-action="unfold-category"]')
    }

    get product() {
        return cy.get('a[data-qa-action="product-click"]')
    }

    get size() {
        return cy.get('button[data-qa-action="size-in-stock"]')
    }

    get add() {
        return cy.get('button[data-qa-action="add-to-cart"]')
    }

    get goToCart() {
        return cy.get('a[data-qa-id="layout-header-go-to-cart"]')
    }
    
    get addQuantity() {
        return cy.get('button[data-qa-id="add-order-item-unit"]')
    }

    get removeProduct() {
        return cy.get('button[data-qa-action="remove-order-item"]')
    }
}

export default new cart