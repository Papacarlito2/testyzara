/// <reference types="cypress" />

import base from "../pages/base";
import regValid from "../pages/regValid";
import validInfo from "../pages/validInfo";
import { correctEmail, correctPass, correctFirstName, correctLastName, correctTelNumber } from "../fixtures/regData.json"
import { unacceptedTermsInfo } from "../fixtures/validDataInfo.json"

describe("User Registration Process", () => {
    beforeEach(() => {
        cy.clearCookies()
    })
    it("Registration without acceptingthe Terms and Conditions", () => {
        base.openHomePage()        
        base.cookies.click()        
        base.login.click()
        base.reg.click()

        const { regEmail, regPass, firstName, lastName, telNumber, regButton } = regValid

        regEmail.type(correctEmail)
        regPass.type(correctPass)
        firstName.type(correctFirstName)
        lastName.type(correctLastName)
        telNumber.type(correctTelNumber)    
        regButton.click()
        validInfo.termsInfo.should("be.visible").and("include.text", unacceptedTermsInfo)
        
    })
})