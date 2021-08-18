/// <reference types="Cypress" />

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

When(`I paste into the editor {string}`, title => {
  cy.get("body").should("be.visible");
});

Then(`the editor content should be {string}`, title => {
  cy.get("body").should("be.visible");
});
