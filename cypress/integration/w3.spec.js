describe("Lazada", () => {
  it("visit website", () => {
    cy.visit("https://www.lazada.sg/");
  });

  it("click on 'Electronic Devices'", () => {
    cy.get(".lzd-site-menu-root").contains("Electronic Devices").click();
  });

  it("click on 'Tablets'", () => {
    cy.get(".lzd-site-menu-root").contains("Tablets").click();
  });

  it("select Apple icon", () => {
    cy.get("[href^='/shop-tablets/apple/']");
  });
});
