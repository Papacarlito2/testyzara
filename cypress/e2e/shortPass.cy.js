/// <reference types="cypress" />

import base from "../pages/base";
import regValid from "../pages/regValid";
import validInfo from "../pages/validInfo";
import { correctEmail, shortPass, correctFirstName, correctLastName, correctTelNumber } from "../fixtures/regData.json"
import { passInfo } from "../fixtures/validDataInfo.json"

describe("User Registration Process", () => {
    beforeEach(() => {
        cy.clearCookies()
    })
    it("Registration with an invalid Email", () => {
        base.openHomePage()        
        base.cookies.click()        
        base.login.click()
        base.reg.click()

        const { regEmail, regPass, firstName, lastName, telNumber, privCheck, regButton } = regValid

        regEmail.type(correctEmail)
        regPass.type(shortPass)
        firstName.type(correctFirstName)
        lastName.type(correctLastName)
        telNumber.type(correctTelNumber)    
        privCheck.check({force: true}).should("be.checked")        
        regButton.click()
        validInfo.shortPassInfo.should("be.visible").and("include.text", passInfo)
        
    })
})