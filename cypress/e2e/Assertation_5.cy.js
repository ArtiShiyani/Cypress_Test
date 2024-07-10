//const { describe } = require("node:test");

describe('Assertation demo',()=>{

    it('Implicit Assertation',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //Implicit assertation  >>should , and 

        cy.url().should('include','orangehrmlive.com') // cy.url()>> returns url

        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        cy.url().should('contain','orangehrmlive') // contain and include keywords are almost same function.


        //no repeation of cy.url()

        cy.url().should('include','orangehrmlive.com') // cy.url()>> returns url

        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        .should('contain','orangehrmlive') // contain and include keywords are almost same function.


        

    })
})