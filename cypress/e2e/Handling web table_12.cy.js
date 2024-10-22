describe('Handling Web table',()=>{

    beforeEach('Login',()=>{

        cy.visit('https://demo.opencart.com/admin/');
        //cy.pause()
        cy.get('#input-username').type('');
        cy.get('#input-password').type('demo');
        cy.get('button[type="submit"]').click();
        //cy.get('.btn-close').click()

        //Customers--> customer

        cy.get('#menu-customer>a').click()// main tab
        cy.get('#menu-customer>ul>li:first-child').click() //sub tab

    })

    it('Check number of rows and Column',()=>{

    })

    it('Check cell data from specofic rows and Column',()=>{

    })

    it('Read all the  rows and Column in the first page',()=>{

    })

    it('Pagination',()=>{

    })

    it('Check number of rows and Column',()=>{

    })
    it('Check number of rows and Column',()=>{

    })
    it('Check number of rows and Column',()=>{

    })
    it('Check number of rows and Column',()=>{

    })
    it('Check number of rows and Column',()=>{

    })
    it('Check number of rows and Column',()=>{

    })

    

    
})