/// <reference types="Cypress" />

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const url = "http://localhost:3000";
Given("the editor is ready and empty", () => {
  cy.visit(url);
});
