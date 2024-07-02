/// <reference types="cypress" />

import base from "../pages/base";
import regValid from "../pages/regValid";
import validInfo from "../pages/validInfo";
import { correctEmail, correctPass, correctFirstName, correctLastName } from "../fixtures/regData.json"
import { missFieldInfo } from "../fixtures/validDataInfo.json"

describe("User Registration Process", () => {
    beforeEach(() => {
        cy.clearCookies()
    })
    it("Registration with a missing field", () => {
        base.openHomePage()        
        base.cookies.click()        
        base.login.click()
        base.reg.click()

        const { regEmail, regPass, firstName, lastName, privCheck, regButton } = regValid

        regEmail.type(correctEmail)
        regPass.type(correctPass)
        firstName.type(correctFirstName)
        lastName.type(correctLastName)    
        privCheck.check({force: true}).should("be.checked")       
        regButton.click()
        validInfo.missFieldInfo.should("be.visible").and("include.text", missFieldInfo)
        
    })
})