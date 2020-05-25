describe("Google Forms", () => {
  it("visit google forms", () => {
    cy.visit(
      "https://docs.google.com/forms/d/e/1FAIpQLScIzAg2LTVQ2NRItxElR6GBchdedGvzELXtwYhC_GrP-0jxFQ/viewform?usp=sf_link"
    );
  });

  it("Select email and fill", () => {
    cy.get("[aria-label='email']").type("jianghua@email.com");
  });

  it("Answer what is your name", () => {
    cy.get("[aria-label='What is your name?']").type("jianghua");
  });

  it("Pushup question answer", () => {
    cy.contains(
      ".freebirdFormviewerViewItemsItemItem",
      "Can you do more than 5 push up *"
    )
      .contains("yes")
      .click();
  });

  it("Fav game", () => {
    cy.contains(
      ".freebirdFormviewerViewNumberedItemContainer",
      "Select 3 or more favourite type of games *"
    )
      .contains("computer games")
      .click();

    cy.contains(
      ".freebirdFormviewerViewNumberedItemContainer",
      "Select 3 or more favourite type of games *"
    )
      .contains("video console games")
      .click();

    cy.contains(
      ".freebirdFormviewerViewNumberedItemContainer",
      "Select 3 or more favourite type of games *"
    )
      .contains("mobile games")
      .click();
  });

  it("Select gender", () => {
    cy.contains(".freebirdFormviewerViewNumberedItemContainer", "Gender *")
      .contains("Choose")
      .click();

    cy.get(".appsMaterialWizMenuPaperselectPopup").contains("Male").click();
  });

  it("Do you love to code answer", () => {
    cy.contains(
      ".freebirdFormviewerViewNumberedItemContainer",
      "Do you love to code? *"
    )
      .contains("5")
      .click();
  });

  it("Enjoy quiz answer", () => {
    cy.contains(
      ".freebirdFormviewerViewNumberedItemContainer",
      "Did you enjoy this quiz? *"
    )
      .contains("Yes")
      .click();
  });

  it("Submit", () => {
    cy.get(".freebirdFormviewerViewNavigationNavControls")
      .contains("Submit")
      .click();
  });
});
