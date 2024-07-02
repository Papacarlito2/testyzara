/// <reference types="cypress" />

import base from "../pages/base";
import logValid from "../pages/logValid";
import validInfo from "../pages/validInfo";
import { correctEmail } from "../fixtures/regData.json";
import { missFieldInfo } from "../fixtures/validDataInfo.json";

describe("User login process", () => {
    beforeEach(() => {
        cy.clearCookies()
    })

    it("Login with a missing field password", () => {
        base.openHomePage()
        base.cookies.click()
        base.login.click()
        logValid.logEmail.type(correctEmail + "{enter}")        
        logValid.logButton.click()
        validInfo.logMissingPassInfo.should("be.visible").and("include.text", missFieldInfo)
    })
})
