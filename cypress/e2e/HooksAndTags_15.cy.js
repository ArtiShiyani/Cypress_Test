//before
//after
//beforeEach
//afterEach


describe('My Suite',()=>{


    before(()=>{

        cy.log('***** Launch app *****');
        

    })

    after(()=>{

        cy.log('***** Close App *****');
        
    })

    beforeEach(()=>{

        cy.log('***** Login *****');
        

    })

    afterEach(()=>{

        cy.log('***** Logout ~ *****');
        

    })

    it('Search',()=>{

        cy.log('***** Searching *****');
        
    })

    it('Advanced saerch',()=>{

        cy.log('*****  Advanced Searching *****');
        
        
    })

    it('Listing product',()=>{

        cy.log('***** Listing product *****');
        
        
    })

    it('',()=>{
        
    })

    it('',()=>{
        
    })


})