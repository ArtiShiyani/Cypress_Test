import 'cypress-iframe'// approach 3

describe('handling frames',()=>{

    it('Approach 1',()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe');

        //captured iframe

        const iframe =cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.clear().type('Welcome {cmd+a}'); //cmd+a >> to select the text

        cy.get('[aria-label="Bold"]').click() //To bold the text

    })

    it('Approach 2, by using the customized command',()=>{

        //create custom command in 'command.js 'file

        cy.visit('https://the-internet.herokuapp.com/iframe');

        //captured iframe

        cy.getIframe('#mce_0_ifr').clear().type('Welcome {cmd+a}');

        cy.get('[aria-label="Bold"]').click()

    })

    it('Approach 3, by using cypress iframe plugin',()=>{

        /*  first install >> npm install -D cypress-iframe

        import 'cypress - iframe'

        */

        cy.visit('https://the-internet.herokuapp.com/iframe');

        cy.frameLoaded('mce_0_ifr');//load the frame

        cy.iframe('mce_0_ifr').clear().type('Welcomeee');



    })





})