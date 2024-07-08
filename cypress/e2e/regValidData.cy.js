import base from "../pages/base";
import regValid from "../pages/regValid";
import { correctEmail, correctPass, correctFirstName, correctLastName, correctTelNumber } from "../fixtures/regData.json";
const { reportTestResult } = require('../support/testlink');

describe("User Registration Process", () => {
    beforeEach(() => {
        cy.clearCookies();
    });

    it("Registration with Valid Data", () => {
        const testCaseId = '59';
        const testPlanId = '151';
        const buildId = '1';
        let status = 'f'; // domyślnie ustaw na "f"
        const notes = 'Test passed successfully';

        base.openHomePage();
        base.cookies.click();
        base.login.click();
        base.reg.click();

        const { regEmail, regPass, firstName, lastName, telNumber, privCheck } = regValid;

        regEmail.type(correctEmail);
        regPass.type(correctPass);
        firstName.type("sdasd");
        lastName.type(correctLastName);
        telNumber.type(correctTelNumber);        
        privCheck.check({ force: true }).should('be.checked');

        // Ustalanie statusu na podstawie wyniku testu
        cy.get('input[data-qa-input-qualifier="firstName"]').invoke('val').then(value => {
            if (value === correctFirstName) {
                status = 'p'; // status 'p' dla pozytywnego wyniku
            }
        }).then(() => {
            // Wywołanie reportTestResult po zakończeniu sprawdzania stanu
            reportTestResult(testCaseId, testPlanId, buildId, status, notes);
        });
        firstName.should("have.value", correctFirstName);
    });
});
