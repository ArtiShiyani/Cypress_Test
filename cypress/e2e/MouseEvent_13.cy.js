import 'cypress-iframe';
describe('Mouse Operations',()=>{

    it('MouseHover',()=>{

        cy.visit("https://demo.opencart.com/");

        cy.get('body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').should('not.be.visible');
        
        cy.get(".nav-link.dropdown-toggle[href='https://demo.opencart.com/en-gb/catalog/desktops']").trigger('mouseover').click();

        cy.get('body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').should('be.visible');


    })

    it('Right Click',()=>{

        //Approach 1

        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

        /*cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu');

        cy.get('.context-menu-icon-copy > span').should('be.visible');*/

        //Approach 2

        cy.get(".context-menu-one.btn.btn-neutral").rightclick();

        cy.get('.context-menu-icon-copy > span').should('be.visible');

    })

    it.only('Double Click',()=>{

        

        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3');

        cy.frameLoaded('#iframeResult'); //frame loded

        //Approach 1 -triger()

        //cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick');
       // cy.iframe('#iframeResult').find('input#field2').should('have.value','Hello World!');

        //Approach 2 - dblclick()

        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick();
        cy.iframe('#iframeResult').find('input#field2').should('have.value','Hello World!');



    })
    it('Drag and Drop using plugin',()=>{


    })

    it('Scrolling Page',()=>{


    })

})