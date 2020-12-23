/// <reference types='cypress'/>
describe("Testing de Notas, CRUD, Alert, etc", () => {
  it("Autenticacion de usuario - Login & verificar que existan elementos del component", () => {
    cy.visit("/");

    // usuario hace login exitoso y se autentica
    cy.get("[data-cy=input-email]").type("test@cypress.com");
    cy.get("[data-cy=input-password]").type("123456");
    cy.get("[data-cy=submit-login]").click().dblclick();
    // comprobar header y div del listado de citas
    cy.get("[data-cy=header]").should("exist");
    cy.get("[data-cy=list-notas]").should("exist");
    // TODO: en este punto ya esta autenticado y puedo hacer sus rol de usuario

    // Crear nota
    cy.get("[data-cy=crear-nota-icon]").should("exist"); // comprobar que exista icon condicional de crear nota, solo aparece cuando notas.length === 0
    cy.get("[data-cy=crear-nota]").should("exist").click(); // ir a crear nota

    // comprobar que exista el formulario
    //cy.get("[data-cy=form-crear-nota]").should("exist");

    // se rellena el formulario de nota
    cy.get("[data-cy=input-name]").type("Test cypress - Titulo test1");
    cy.get("[data-cy=input-description]").type(
      `Description test cypress - lorem ipsum...`
    );
    cy.get("[data-cy=input-submit-crear-nota]").click(); // creamos cita exitosa

    // TODO: creamos 2 notas mas automatizadas
    cy.get("[data-cy=crear-nota]").should("exist").click();
    cy.get("[data-cy=input-name]").type("Test cypress - Titulo test2");
    cy.get("[data-cy=input-description]").type(
      `Description test cypress - distraerá con el contenido del texto de un sitio mientras que mira su diseño.`
    );
    cy.get("[data-cy=input-submit-crear-nota]").click();

    cy.get("[data-cy=crear-nota]").should("exist").click();
    cy.get("[data-cy=input-name]").type("Test cypress - Titulo test3");
    cy.get("[data-cy=input-description]").type(
      `Description test cypress - distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución.`
    );
    cy.get("[data-cy=input-submit-crear-nota]").click();

    // TODO: EDITAR UNA NOTA

    // 1er paso -> Seleccionar la primera nota del list de notas

    /** Para seleccionar el primero de una lista usamos :nth-child(1), el id nota-seleccionada esta en Nota.js que es el children
     * component de ListNotas, no importa si es la lista esta creada con divs, igual sirve, pero lo ideal es que sea creada con
     * <ul><li data-cy='nota-seleccionada'></li></ul> que son las etiquetas por defecto para listas
     */
    cy.get(
      "[data-cy=nota-seleccionada]:nth-child(1) [data-cy=editar-nota]"
    ).click();

    /* [data-cy=nota-seleccionada]:nth-child(1) elige la primera nota y agregamos el otro data-cy que es lo que va a dar click
       en este caso es a editar nota!*/

    // TODO: editamos esa nota seleccionada
    cy.get("[data-cy=input-name]").clear().type("Test cypress - EDITADA!");
    cy.get("[data-cy=input-description]")
      .clear()
      .type(`EDITADA - Test Cypress `);
    cy.get("[data-cy=input-submit-editar-nota]").click();

    // Seleccionar y ELIMINAR UNA NOTA
    cy.get(
      "[data-cy=nota-seleccionada]:nth-child(1) [data-cy=eliminar-nota]"
    ).click();

    // cerrar sesion
    cy.get("[data-cy=logout]").click();
  });
});
