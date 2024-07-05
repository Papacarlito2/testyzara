/// <reference types="cypress" />

import base from "../pages/base";
import regValid from "../pages/regValid";
import { correctEmail, correctPass, correctFirstName, correctLastName, correctTelNumber } from "../fixtures/regData.json"

describe("User Registration Process", () => {
    beforeEach(() => {
        cy.clearCookies()
    })
    it("Registration with Valid Data", () => {
        base.openHomePage()
        base.cookies.click()  
        base.login.click()
        base.reg.click()

        const { regEmail, regPass, firstName, lastName, telNumber, privCheck, regButton } = regValid

        regEmail.type(correctEmail)
        regPass.type(correctPass)
        firstName.type(correctFirstName)
        lastName.type(correctLastName)    
        telNumber.type(correctTelNumber)
        privCheck.check({force: true}).should("be.checked")
        regButton
    })
})