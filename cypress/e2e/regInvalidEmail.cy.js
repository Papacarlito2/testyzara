/// <reference types="cypress" />

import base from "../pages/base";
import regValid from "../pages/regValid";
import validInfo from "../pages/validInfo";
import { incorrectEmail, correctPass, correctFirstName, correctLastName, correctTelNumber } from "../fixtures/regData.json";
import { emailInfo } from "../fixtures/validDataInfo.json";

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

        regEmail.type(incorrectEmail)
        regPass.type(correctPass)
        firstName.type(correctFirstName)
        lastName.type(correctLastName)
        telNumber.type(correctTelNumber)    
        privCheck.check({force: true}).should("be.checked")        
        regButton.click()
        validInfo.invalidEmailInfo.should("be.visible").and("include.text", emailInfo)
        
    })
})