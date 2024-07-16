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

        //Use of shoud and 'and'keyword.

        cy.url().should('include','orangehrmlive.com') // cy.url()>> returns url

        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        .and('contain','orangehrmlive') // contain and include keywords are almost same function.

        .and('not.contain','grennhrmlivr')// not. keyword used for negative assertation.

        //cy.title() returns the  title of current web page

        cy.title().should('include','Orange')

        .and('eq','OrangeHRM')

        .and('contain','HRM')


        //Validation on prticular web element

        cy.get('.orangehrm-login-branding > img').should('be.visible') // to check that logo is present or not on webpage
        .and('exist') //logo exist

        cy.xpath('//a').should('have.length','5') //to check nomber of links

        cy.get('input[placeholder="Username"]').type('Admin')// to enter value in input field.

        cy.get('input[placeholder="Username"]').should('have.value','Admin') // to check the entered value in input field.
    })
})