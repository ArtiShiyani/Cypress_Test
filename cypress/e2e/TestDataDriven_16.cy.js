describe('My Test suite',()=>{

    it('Test data driven',()=>{

        cy.fixture('OrangeHRM2').then( (data)=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        data.forEach(userdata=>{

        cy.get('input[name="username"]').type(userdata.username);

        cy.get("input[placeholder='Password']").type(userdata.password);

        cy.get("button[type='submit']").click();

        //validation part

        if(userdata.username==Admin && userdata.password==admin123)
        {
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', userdata.expected);
        cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)').click()
        }
        else {
            cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text',userdata.expected)
        }

        })

        })



    })

})