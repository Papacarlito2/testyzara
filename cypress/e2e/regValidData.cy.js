/// <reference types="cypress" />

const { reportTestResult } = require('../support/testlink');

import base from "../pages/base";
import regValid from "../pages/regValid";
import { correctEmail, correctPass, correctFirstName, correctLastName, correctTelNumber } from "../fixtures/regData.json"

describe("User Registration Process", () => {

    const testCaseId = 'Za-4';
    const testPlanId = '151';
    const buildId = '1';
    const status = 'p'; // 'p' dla pozytywnego, 'f' dla negatywnego
    const notes = 'Test passed successfully';
    
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

        reportTestResult(testCaseId, testPlanId, buildId, status, notes);
    })
})