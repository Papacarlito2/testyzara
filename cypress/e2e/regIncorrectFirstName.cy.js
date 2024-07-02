/// <reference types="cypress" />

import base from "../pages/base";
import regValid from "../pages/regValid";
import { correctEmail, correctPass, incorrectFirstName, correctLastName, correctTelNumber } from "../fixtures/regData.json"

describe("User Registration Process", () => {
    beforeEach(() => {
        cy.clearCookies()
    })
    it('Registration using special characters in the "NAZWISKO" field', () => {
        base.openHomePage()        
        base.cookies.click()        
        base.login.click()
        base.reg.click()

        const { regEmail, regPass, firstName, lastName, telNumber, privCheck, regButton } = regValid

        regEmail.type(correctEmail)
        regPass.type(correctPass)
        firstName.type(incorrectFirstName)
        lastName.type(correctLastName)
        telNumber.type(correctTelNumber)    
        privCheck.check({force: true}).should("be.checked")        
        // regButton.click()        
    })
})