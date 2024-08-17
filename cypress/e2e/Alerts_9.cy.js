


describe('Alerts',()=>{

//javascript Alert : it will have some text and 'ok 'button.
//alert is automatically handel by the cypress no neet to write different code.
//no need to write the code for closing the alert window.

it('JS Alerts',()=>{

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    cy.get("button[onclick='jsAlert()']").click()

    //To validate alert windoe text

    cy.on('window:alert',(t)=>{ 

        //cy.on >> this method to trigger to event & 't' represent alert window.
        expect((t)).to.contains('I am a JS Alert')
    })
    //alert window automatically closed by cypress.
    //To valiadte the text after.
    cy.get('#result').should('have.text','You successfully clicked an alert')

})















//javascript confirm alert : it will have some text with "ok" and cancel buttons.
//Javascript prompt alert: it will have some text with a text box for user input along with button 
//Authonticated alert.


  

})