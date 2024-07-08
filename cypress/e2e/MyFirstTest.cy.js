//const { describe } = require("node:test");

describe('My First Test',()=>{

    it('Verify Title -Positive',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/") //To launch website 

        cy.title().should('eq','OrangeHRM')

    })

    it('Verify Title -Negative',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/") //To launch website 

        cy.title().should('eq','OrangeHRM567')

    })
})

