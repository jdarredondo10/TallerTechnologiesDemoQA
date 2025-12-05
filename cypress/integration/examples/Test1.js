let uiValidation = false;
describe("Demo QA", function () {
  it("Fill Form and validate fields", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      // return false to prevent Cypress from failing the test
      return false;
    });

    //Actions: Visit website and fill form
    cy.visit("https://demoqa.com/text-box");
    cy.get("#userName").type("John Doe");
    cy.get("#userEmail").type("john.doe@example.com");
    cy.get("#currentAddress").type("123 Main St");
    cy.get("#permanentAddress").type("456 Secondary St");
    cy.get("#submit").click();

    //Assertions: form response should match entered fields
    cy.get("#output")
      .find("#name")
      .invoke("text")
      .then((text) => {
        var nameOuptut = text.split(":")[1];
        expect(nameOuptut).to.include("John Doe");
      });

    cy.get("#output")
      .find("#email")
      .invoke("text")
      .then((text) => {
        var emailOuptut = text.split(":")[1];
        expect(emailOuptut).to.include("john.doe@example.com");
      });

    cy.get("#output")
      .find("#currentAddress")
      .invoke("text")
      .then((text) => {
        var emailOuptut = text.split(":")[1];
        expect(emailOuptut).to.include("123 Main St");
      });

    cy.get("#output")
      .find("#permanentAddress")
      .invoke("text")
      .then((text) => {
        var emailOuptut = text.split(":")[1];
        expect(emailOuptut).to.include("456 Secondary St");
        uiValidation = true;
        cy.log("UI Validations Passed");
      });
  });

  it("Validate API Response", () => {
    cy.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts/1",
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.include.keys("userId", "id", "title", "body");
      expect(response.body.id).to.equal(1);
      if (uiValidation) {
        cy.log("All tests have passed");
      }
    });
  });
});
