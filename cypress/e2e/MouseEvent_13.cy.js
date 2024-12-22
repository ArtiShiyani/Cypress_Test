import 'cypress-iframe'; // necessary for iframe
require('@4tw/cypress-drag-drop'); // necessary when drag and drop plugin is installed.

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

    it('Double Click',()=>{

        

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

        //Need to install  NPM plugin >>npm install --save-dev @4tw/cypress-drag-drop

        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');

        cy.get('#box1').should('be.visible');

        cy.get('#box101').should('be.visible');

        //cy.wait(5000);

        cy.get('#box1').drag('#box101',{force:true});

        /*cy.get('#box2').drag('#box102');

        cy.get('#box3').drag('#box103');

        cy.get('#box4').drag('#box104');

        cy.get('#box5').drag('#box105');

        cy.get('#box6').drag('#box106');

        cy.get('#box7').drag('#box106');*/


    })

    it.only('Scrolling Page',()=>{

        /*cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html');

        cy.get('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)').scrollIntoView();

        cy.get('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)').should('be.visible');*/

        cy.visit('https://www.countries-ofthe-world.com/');
        cy.get('ul:nth-child(3) li:nth-child(6)').scrollIntoView();
        cy.get('ul:nth-child(3) li:nth-child(6)').should('be.visible');

        cy.get('#footer').scrollIntoView()

    })

})