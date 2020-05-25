describe("Name of the group", () => {
  it("should ", () => {
    cy.visit("");
    console.log(Cypress.env("FROM_ENV_FILE"));
    console.log(Cypress.env("FROM_CONFIG"));
    cy.contains("Learn React");
  });
});
