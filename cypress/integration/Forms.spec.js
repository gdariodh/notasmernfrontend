/// <reference types='cypress'/>
// TODO: en cypress.json esta como baseUrl -> localhost:3000

describe("Formularios", () => {
  it("Verificar que cargue el index y que los elementos existan como el form-login", () => {
    cy.visit("/"); // cargar index
    cy.contains("Iniciar sesion"); // comprobar que se muestre algo del component de Login

    // buenas practicas: se debe asignar un id de testing a un tag html -> data-cy='nombre'
    // llamar id de testing con cypress - siguiendo documentacion
    cy.get("[data-cy=titulo]").invoke("text").should("eq", "Inicia sesion");

    // revisar por el form de Login
    cy.get("[data-cy=form-login]").should("exist");
    cy.get("[data-cy=input-email]").should("exist");
    cy.get("[data-cy=input-password]").should("exist");
    cy.get("[data-cy=submit-login]")
      .should("exist")
      .should("have.value", "Iniciar sesion");

    // revisar por el link de crear cuenta
    cy.get("[data-cy=nueva-cuenta]")
      .should("exist")
      .should("have.attr", "href") // debe tener..
      .should("eq", "/crear-cuenta"); // deberia llevarnos a...
  });

  // siguiente test
  it("Visitar crear-cuenta y verificar que existan los elementos como el form", () => {
    cy.visit("/crear-cuenta");

    // revisar Link de ir a Login
    cy.get("[data-cy=ir-login]")
      .should("exist")
      .should("have.attr", "href")
      .should("eq", "/home");

    // revisar que exista el formulario de crear cuenta
    cy.get("[data-cy=input-name]").should("exist");
    cy.get("[data-cy=input-email]").should("exist");
    cy.get("[data-cy=input-password]")
      .should("exist")
      .should("have.prop", "type")
      .should("eq", "password");
    cy.get("[data-cy=input-submit]")
      .should("exist")
      .should("have.value", "Crear cuenta") // el valor debe ser "Crear cuenta"
      .should("not.have.value", "CREAR Cuenta"); // forma de negar una condicion

      // ir a home
      cy.visit('/')
  });
});
