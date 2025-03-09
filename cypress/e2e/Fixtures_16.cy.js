
describe('Fixture test case',()=>{


    //1) Direct access
    it('FixtureDemoTest',()=>{

        //Normal method

        /*cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.get('input[name="username"]').type('Admin');

        cy.get("input[placeholder='Password']").type("admin123");

        cy.get("button[type='submit']").click();

        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text','Dashboard');*/

        // direct access-Using fixture

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.fixture('OrangeHRM.json').then( (data)=>{

        cy.get('input[name="username"]').type(data.username);

        cy.get("input[placeholder='Password']").type(data.password);

        cy.get("button[type='submit']").click();

        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', data.expected);


        })

        



    })

    //2) Through hook - for multiplr it block
    it('',()=>{

    })



})