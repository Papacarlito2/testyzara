/// <reference types="cypress" />

import base from "../pages/base";
import regValid from "../pages/regValid";
import validInfo from "../pages/validInfo";
import { longValue, correctTelNumber } from "../fixtures/regData.json";
import { longValueInfo } from "../fixtures/validDataInfo.json";

describe("User Registration Process", () => {
  beforeEach(() => {
    cy.clearCookies()
  })

  it("Registration with an invalid Email", () => {
    base.openHomePage()
    base.cookies.click()
    base.login.click()
    base.reg.click()

    const fields = [regValid.email, regValid.regPass, regValid.firstName, regValid.lastName]

    fields.forEach(field => {
      regValid.typeAndCheckLength(field, longValue);
    })

    regValid.telNumber.type(correctTelNumber)
    regValid.privCheck.check({force: true}).should("be.checked")
    regValid.regButton.click()
    validInfo.valueInfo.should("be.visible").and("include.text", longValueInfo);
  })
})
