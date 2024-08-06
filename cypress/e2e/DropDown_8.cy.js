//const { describe } = require("node:test");

describe('Handle different DropDown',()=>{


    it.skip('Dropdown with select(tag)',()=>{

    cy.visit('https://www.zoho.com/commerce/free-demo.html')

    cy.get('#zcf_address_country').select('Iran').should('have.value','Iran') // Assertation >>select tag is there then use "have.value".


    })

    it.skip('Dropdown without select(tag)',()=>{

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
    
        cy.get('#select2-billing_country-container').click() // Dropdown locator.

        cy.get('.select2-search__field').type('Italy').type('{enter}')// type('{enter}')>>> to press enter.

        //To check entered value is available in dropdown or not.

        cy.get('#select2-billing_country-container').should('have.text','Italy')
    
        })

        it.skip('Auto sugget Dropdown',()=>{

            cy.visit('https://www.wikipedia.org/')

            //cy.xpath('//select[@id="searchLanguage"]').select('हिन्दी').should('have.value','hi')
        
            cy.xpath("//input[@id='searchInput']").type('Gandhinagar')

            cy.xpath('//h3[@class="suggestion-title"]').contains('Gandhinagar').click()
        
            })

            it('Dynamic Dropdown',()=>{

                cy.visit('')
    
                cy.xpath('').type('')
    
                cy.xpath('').contains('').click()
            
                })
})