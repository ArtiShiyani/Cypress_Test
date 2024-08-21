//const { describe } = require("node:test");

//Move forward and backword >>cy.go()  or cy.go(-1), cy.go(1)
//to reload >>cy.reload()




describe('my suite',()=>{

    it('',()=>{

        cy.visit('https://demo.opencart.com/')
        cy.title().should('eq','Your Store')//Homepage

        cy.xpath('//li/a[text()="Cameras"]').click() // camera page
        cy.xpath('//h2[text()="Cameras"]').should('have text','Cameras')

        cy.go('back')// homepage
        cy.title().should('eq','Your Store')

        
        cy.go('forward') //camera page
        cy.xpath('//h2[text()="Cameras"]').should('have text','Cameras')

        cy.go(-1) //homepage
        cy.title().should('eq','Your Store')

        cy.go(1)// cemara page

        cy.reload()




    })

})