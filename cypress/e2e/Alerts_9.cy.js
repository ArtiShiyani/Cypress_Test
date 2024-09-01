


describe('Alerts',()=>{

//1.javascript Alert : it will have some text and 'ok 'button.
//alert is automatically handel by the cypress no neet to write different code.
//no need to write the code for closing the alert window.

it('JS Alerts',()=>{

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    cy.get("button[onclick='jsAlert()']").click()

    //To validate alert windoe text

    cy.on('window:alert',(t)=>{ 

        //cy.on >> this method to trigger to event & 't' represent alert window.
        expect(t).to.contains('I am a JS Alert')
    })
    //alert window automatically closed by cypress.
    //To valiadte the text after.
    cy.get('#result').should('have.text','You successfully clicked an alert')

})
//2.javascript confirm alert : it will have some text with "ok" and cancel buttons.

it('JS Confirm alert - ok button',()=>{

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    cy.get("button[onclick='jsConfirm()']").click()

    cy.on('window:confirm', (t)=>{
        
        expect(t).to.contains('I am a JS Confirm')
    })

    //Cypress automaicaly closed alerts windoe by using 'OK'.Default 

    cy.get('#result').should('have.text','You clicked: Ok')  
})

it('JS Confirm alert - Cancel button',()=>{

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    cy.get("button[onclick='jsConfirm()']").click()

    cy.on('window:confirm',(t)=>{
        
        expect(t).to.contains('I am a JS Confirm')
    })
    cy.on('window:confirm',()=> false) //cypress closes window using cancel button

    cy.get('#result').should('have.text','You clicked: Cancel')  
})


//3.Javascript prompt alert: it will have some text with a text box for user input along with button 

it('JS Promt alert',()=>{

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    //event should be trigged before opening the alert window.

    cy.window().then((win)=>{

        cy.stub(win,'prompt').returns('Welcome')
    })

    cy.get("button[onclick='jsPrompt()']").click()

    //Cypress  will automaticly close prompt by using "ok" button - by default

    cy.get('#result').should('have.text','You entered: Welcome')  


   /* cy.on('window:prompt',()=> false) //cypress closes window using cancel button

    cy.get('#result').should('have.text','You entered: null')  */  
})


//Authonticated alert.

it.only('Authonticated alert',()=>{

    //approach 1 >>  URL along with username and password 

    cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth :
                                                                    {username: "admin", 
                                                                    password: "admin"}
                                                             })


    cy.get("div[class='example'] p").should('have.contain','Congratulations!')


    //approach 2 >> add usrname and password within URL

    //cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')

   // cy.get("div[class='example'] p").should('have.text','Congratulations! You must have the proper credentials.')



 
})

    

})
