/// <reference types='cypress'/>

describe("CrearCuenta Formulario -> Interaccion", () => {
  it("LLenar y validar formulario de crear cuenta", () => {
    cy.visit("/crear-cuenta");
    // TODO: Eventos
    cy.get("[data-cy=input-submit]").click(); // submit con campo vacio
    // comprobar que se muestre las alertas de error de formik
    cy.get("[data-cy=formik-name]")
      .should("exist")
      .invoke("text")
      .should("eq", "Ingresa un nombre, es obligatorio");
    cy.get("[data-cy=formik-email]")
      .should("exist")
      .invoke("text")
      .should("eq", "Es obligatorio");
    cy.get("[data-cy=formik-password]")
      .should("exist")
      .invoke("text")
      .should("eq", "El password es obligatorio");

    // TODO: Eventos con formulario \\ type escribe lo que le pasamos como string

    // caso 1: form sin password & email no valido
    cy.get("[data-cy=input-name]").type("Gabriel");
    cy.get("[data-cy=input-email]").type("test.com");
    cy.get("[data-cy=input-submit]").click();
    // muestra alertas de error de formik de email & password
    cy.get("[data-cy=formik-email]")
      .should("exist")
      .invoke("text")
      .should("eq", "Email no valido");
    cy.get("[data-cy=formik-password]")
      .should("exist")
      .invoke("text")
      .should("eq", "El password es obligatorio");

    // caso 2: form con password incompleto y email correcto  \\ clear es para limpiar un campo
    cy.get("[data-cy=input-email]").clear().type("test@cypress-repetido.com");
    cy.get("[data-cy=input-password]").type("123");
    cy.get("[data-cy=input-submit]").click();
    // mostrar alerta de error de formik de password
    cy.get("[data-cy=formik-password]")
      .should("exist")
      .invoke("text")
      .should("eq", "Debe tener al menos 6 caracteres");

    // caso 3: form exitoso, pero el usuario ya existe, TODO: es decir que esta repetido
    cy.get("[data-cy=input-password]").clear().type("123456");
    cy.get("[data-cy=input-submit]").click();
    // mostrar error de alerta de USUARIO REPETIDO
    cy.get("[data-cy=alert]")
      .invoke("text")
      .should("eq", "Email registrado, intenta con otro");

    // caso 4: tiene bien el password e ingresa un email no repetido, es decir usuario creado
    cy.get("[data-cy=input-email]").clear().type("test@cypress.com");
    cy.get("[data-cy=input-submit]").click(); // envia formulario exitoso
    // mostrar alerta exitosa de usuario creado
    cy.get("[data-cy=alert]")
      .should("exist")
      .invoke("text")
      .should("eq", "Usuario creado exitosamente");
    // comprobar que se cargue el componente del listado de notas
    cy.get("[data-cy=list-notas]").should("exist");
    // cerrar sesion
    cy.get("[data-cy=logout]").should("exist").click(); // cerrar la sesion
  });
});
