
/*Cypress supports only CSS locators and xpath 

CSS locators Combinations as below 

1)id (#)

2)class(.)

3) [attribute="value"] [name="name"]
4)class[attribute='value']

same as
) tag.id (#)

2)tag.class(.)

3) tag.[attribute="value"] [name="name"]
4)tag.class[attribute='value'] 

=>tag is optional in combination.*/


describe('CSS LOCATORS',()=>{

    it('css locators',()=>{

        cy.visit("https://www.demoblaze.com/") //To launch website 

        cy.get('#login2').click() // To click on perticular element, locator

        cy.get('input#loginusername').type('employee') //To type or enter in element. >> username 

        cy.get('input#loginpassword').type('123')

        //cy.xpath('(//button[@class="btn btn-primary"])[3]').click() //Xpath other script>>


        //cy.title().should('eq','OrangeHRM') //
        

    })
})