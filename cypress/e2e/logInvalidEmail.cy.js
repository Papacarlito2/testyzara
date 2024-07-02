/// <reference types="cypress" />

import base from "../pages/base";
import logValid from "../pages/logValid";
import validInfo from "../pages/validInfo";
import { incorrectEmail, correctPass, } from "../fixtures/regData.json";
import { emailInfo } from "../fixtures/validDataInfo.json";

describe("User login process", () => {
    beforeEach(() => {
        cy.clearCookies()
    })

    it("Login with an invalid Email", () => {
        base.openHomePage()
        base.cookies.click()
        base.login.click()
        logValid.logEmail.type(incorrectEmail)
        logValid.logPass.type(correctPass)
        logValid.logButton.click()
        validInfo.logEmailValidInfo.should("be.visible").and("include.text", emailInfo)
    })
})
