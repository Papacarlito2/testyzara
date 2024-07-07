import base from "../pages/base";
import regValid from "../pages/regValid";
import { correctEmail, correctPass, correctFirstName, correctLastName, correctTelNumber } from "../fixtures/regData.json";
const { reportTestResult } = require('../support/testlink');

describe("User Registration Process", () => {
    beforeEach(() => {
        cy.clearCookies();
    });

    it("Registration with Valid Data", () => {
        const testCaseId = 'Za-4';
        const testPlanId = '151';
        const buildId = '1';
        let status = 'p'; // domyślnie ustaw na "p"
        const notes = 'Test passed successfully';

        base.openHomePage();
        base.cookies.click();  
        base.login.click();
        base.reg.click();

        const { regEmail, regPass, firstName, lastName, telNumber, privCheck } = regValid;

        regEmail.type(correctEmail);
        regPass.type(correctPass);
        firstName.type(correctFirstName);
        lastName.type(correctLastName);    
        telNumber.type(correctTelNumber);

        // Sprawdzenie czy checkbox jest zaznaczony
        privCheck.should('be.checked');

        // Bezpośrednie wywołanie reportTestResult po asercji
        reportTestResult(testCaseId, testPlanId, buildId, status, notes);
    });
});
