
//cy.screenshot() >> to take the screenshot of page.

describe('Screenshot',()=>{

    it.skip('Screenshot and videos',()=>{

        cy.visit('https://demo.opencart.com/');

        cy.wait(3000);

        cy.screenshot('HomePage'); //cy.screenshot('') >> take screenshot without name , need to add name in bracket.

        cy.wait(3000);

        cy.get('#logo').screenshot('logo'); // to capture the schreenshot of perticular element.


    })

    it('Videos-screenshot on failure',()=>{

        cy.visit('https://demo.opencart.com/');

        //Automatically (bult-in) capture of screenshot and videos on failure - only when execute through CLI

        cy.get('li:nth-child(7) a:nth-child(1)').click();
        cy.get("div[id='content'] h2").should('have.text','Tablets');


    })
})