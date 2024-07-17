//const { describe } = require("node:test");

describe('Checking UI Elements',()=>{

    it('Checking RadioButtons',()=>{

        cy.visit('https://demoqa.com/automation-practice-form')


        //visibility of radio buttons
        cy.get('input[value="Male"]').should('be.visible')
        cy.get('input[value="Female"]').should('be.visible')
        cy.get('input[value="Other"]').should('be.visible')

        //Selecting Radio buttons
        cy.get('input#gender-radio-2').check().should('be.checked')

    })
})