/// <reference types='cypress'/>
// TODO: Test con Eventos de formulario

describe("Login formulario -> Interaccion", () => {
  it("Rellenar y validar formulario, Alertas", () => {
    cy.visit("/");
    // caso 1: envia formulario vacio
    cy.get("[data-cy=submit-login]").should("exist").click();
    // muestra alerta de formulario incompletos
    cy.get("[data-cy=formik-email]")
      .should("exist")
      .invoke("text")
      .should("eq", "Ingresa el email del usuario");
    cy.get("[data-cy=formik-password]")
      .should("exist")
      .invoke("text")
      .should("eq", "El password es obligatorio");
    cy.get("[data-cy=submit-login]").should("exist").click();

    // caso 2: pone un formulario no valido y password incompleto
    cy.get("[data-cy=input-email]").should("exist").type("test.com");
    cy.get("[data-cy=input-password]").should("exist").type("123");
    cy.get("[data-cy=submit-login]").should("exist").click();
    // revisar alertas de error de email y password
    cy.get("[data-cy=formik-email]")
      .should("exist")
      .invoke("text")
      .should("eq", "Email no valido");
    cy.get("[data-cy=formik-password]")
      .should("exist")
      .invoke("text")
      .should("eq", "Debe tener al menos 6 caracteres");

    // caso 3: rellena el formulario pero el password no es valido
    cy.get("[data-cy=input-email]")
      .clear()
      .should("exist")
      .type("test@cypress.com");
    cy.get("[data-cy=input-password]").clear().should("exist").type("123455");
    cy.get("[data-cy=submit-login]").should("exist").click();
    // comprobar que se muestre la alerta de error de Password incorrecto
    cy.get("[data-cy='alert']")
      .should("exist")
      .invoke("text")
      .should("eq", "Password incorrecto");

    // caso 4: rellena el formulario exitoso, pero el usuario no existe
    cy.get("[data-cy=input-email]")
      .clear()
      .should("exist")
      .type("test@noexiste.com");
    cy.get("[data-cy=input-password]").clear().should("exist").type("123456");
    cy.get("[data-cy=submit-login]").should("exist").click();
    // verificar alerta de error de USUARIO NO EXISTE
    cy.get("[data-cy=alert]")
      .should("exist")
      .invoke("text")
      .should("eq", "El usuario no existe");

    // caso 5: rellena el formulario de forma exitosa
    cy.get("[data-cy=input-email]")
      .clear()
      .should("exist")
      .type("test@cypress.com");
    cy.get("[data-cy=input-password]").clear().should("exist").type("123456");
    cy.get("[data-cy=submit-login]").should("exist").click();

    // comprobar que se cargue el componente del listado de notas
    cy.get("[data-cy=list-notas]").should("exist");
    // cerrar sesion
    cy.get("[data-cy=logout]").should("exist").click(); // cerrar la sesion
  });
});
