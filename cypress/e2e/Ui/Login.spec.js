/// <reference types="cypress" />

describe('US001 - Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('login');
    });

    it('Deve fazer login com sucesso', () => {
        
    });

    it('Validar mensagem de erro quando usuário for inválido', () => {
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').clear().type('email@email.com');
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123456');
        cy.get('[data-test="login-submit"]').click() ;
        cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas');
    });
 });