/// <reference types="cypress" />

import base from "../pages/base";
import logValid from "../pages/logValid";
import validInfo from "../pages/validInfo";
import { correctPass } from "../fixtures/regData.json";
import { missFieldInfo } from "../fixtures/validDataInfo.json";

describe("User login process", () => {
    beforeEach(() => {
        cy.clearCookies()
    })

    it("Login with a missing field email", () => {
        base.openHomePage()
        base.cookies.click()
        base.login.click()        
        logValid.logPass.type(correctPass)
        logValid.logButton.click()
        validInfo.logEmailValidInfo.should("be.visible").and("include.text", missFieldInfo)
    })
})
