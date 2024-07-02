/// <reference types="cypress" />

import base from "../pages/base";
import cart from "../pages/cart";

describe("Add to cart functionality", () => {
    beforeEach(() => {
        cy.clearCookies()
    })

    it("Updating the quantity of a product in the cart", () => {
        base.openHomePage()
        base.cookies.click()
        base.hamburgerIcon.click()
        cart.productCategory.eq(6).click()
        cart.product.eq(8).click()
        cart.size.eq(1).click()
        cart.add.click()
        cart.goToCart.click()
        cart.addQuantity.click()        
    })
})
