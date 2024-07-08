describe('Xpath LOCATORS',()=>{

    it('Xpath locators',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.xpath('//input[@name="username"]').type('Admin')

        cy.xpath('//input[@name="password"]').type('admin123')

        cy.xpath('//button[@type="submit"]').click()

    })

})