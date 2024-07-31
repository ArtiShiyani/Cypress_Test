//const { describe } = require("node:test");

describe('Handle different DropDown',()=>{


    it.skip('Dropdown with select(tag)',()=>{

    cy.visit('https://www.zoho.com/commerce/free-demo.html')

    cy.get('#zcf_address_country').select('Iran').should('have.value','Iran') // Assertation


    })

    it('Dropdown without select(tag)',()=>{

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
    
        cy.get('#select2-billing_country-container').click()

        cy.get('.select2-search__field').type('Italy').type('{enter}')// type('{enter}')>>> to press enter.

    
    
        })
})