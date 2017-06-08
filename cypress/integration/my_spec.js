describe("Cypress.io + Storybook", () => {
  it("cy.should - assert that <title> is correct", () => {
    cy.visit("http://localhost:6006/");

    cy.title().should("include", "Storybook");
  });

  context("navigating", () => {
    it("should show stories", () => {
      cy.get(".Pane1").find("li > a").its("length").should("be.gt", 2);
    });
    it("should navigate on click", () => {
      cy.get(".Pane1").find("li > a").eq(1).should(found => {
        const text = found.text();

        found.click();

        cy.url().should("contain", text);
      });
    });
  });
});
