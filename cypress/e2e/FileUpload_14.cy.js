
    //need to install package for file upload. >>npm install --save-dev cypress-file-upload
    //keep  file in the 'Fixture; folder >> then 'attachFile'method will read

import 'cypress-file-upload' // for file upload
describe('File Uploads',(()=>{


    it.only('Single file upload',()=>{

        cy.visit('https://the-internet.herokuapp.com/upload');

        cy.get('#file-upload').attachFile('Arti Shiyani - 2.pdf');

        cy.get('#file-submit').click();

        cy.wait(3000);

        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');

    })


    it('File upload - Rename',()=>{

    })


    it('File upload -  Drag and Drop',()=>{

    })


    it('Multiple File upload',()=>{

    })


    it('Upload file show Dom',()=>{

    })


    it('',()=>{

    })


    it('',()=>{

    })


    it('',()=>{

    })

}))