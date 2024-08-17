//const { describe } = require("node:test");

describe('Checking UI Elements',()=>{

    it('Checking RadioButtons',()=>{

        cy.visit('https://demo.automationtesting.in/Register.html')

        cy.wait(5000) //waits for 5 sec
        


        //visibility of radio buttons

        //cy.pause()// execution will pause here.
        cy.get('input[value="Male"]').scrollIntoView().should('be.visible') //cy.get('selector-of-element').scrollIntoView(); >> Scrolls until the element is in view

        cy.get('input[value="Female"]').should('be.visible')
        

        //Selecting Radio buttons
        cy.get('input[value="Male"]').check().should('be.checked')
        cy.get('input[value="Female"]').should('not.be.checked')


    })

    it('Checking Checkbox',()=>{

        cy.visit('https://demo.automationtesting.in/Register.html')

        cy.wait(5000)
        


        //visibility of checkbox

        cy.get('input#checkbox1').should('be.visible')
        cy.get('input#checkbox2').should('be.visible')
        cy.get('input#checkbox3').should('be.visible')

        //selecting single checkbox

        cy.get('input#checkbox1').check().should('be.checked')

        //Unselecting single Checkbox

        cy.get('input#checkbox1').uncheck().should('not.be.checked')

        //Selecting mutiple cheeckbox(select common locator)

        cy.get('input[type="checkbox"]').check().should('be.checked')

        //Unselecting multiple checkbox.
        cy.get('input[type="checkbox"]').uncheck().should('be.checked')

        //Selecting first and last checkbox among the checkboxes

        cy.get('input[type="checkbox"]').first().check()
        cy.get('input[type="checkbox"]').last().check()



    })
})