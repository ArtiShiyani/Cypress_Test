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

        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length','10'); //table rows covered in 'tbody'
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','6') // 'thead' contains column

    })

    it('Check cell data from specofic rows and Column',()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)").contains('Asd12@gmail.com')


    })

    it('Read all the  rows and Column in the first page',()=>{
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr') //Locator of all rows

            .each( ($row,index,$rows)=>{

                cy.wrap($row).within( ()=>{

                    cy.get("td").each( ($col,index,$col)=>{

                        cy.log($col.text());

                    })
                })

            })

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