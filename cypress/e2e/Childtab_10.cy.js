
describe('Handling tab approach 1',(()=>{

    //by default cypress not supports handling child tab but we have to make work around


    it('Approach 1',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.get('.example >a').invoke('removeAttr','target').click() // invoke ()>> used to remoev attribute

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000)
        cy.go('back')
    })

    it('Approach 2',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.get('.example >a').then((e)=>{

            let url =e.prop('href')

            cy.visit (url)
        })

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000)
        cy.go('back')

    
    })

}))