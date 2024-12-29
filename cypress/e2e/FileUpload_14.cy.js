
    //need to install package for file upload. >>npm install --save-dev cypress-file-upload
    //keep  file in the 'Fixture; folder >> then 'attachFile'method will read

import 'cypress-file-upload' // for file upload
describe('File Uploads',(()=>{


    it('Single file upload',()=>{

        cy.visit('https://the-internet.herokuapp.com/upload');

        cy.get('#file-upload').attachFile('Arti Shiyani - 2.pdf');

        cy.get('#file-submit').click();

        cy.wait(3000);

        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');

    })


    it('File upload - Rename',()=>{


        cy.visit('https://the-internet.herokuapp.com/upload');

        cy.get('#file-upload').attachFile({filePath:'Arti Shiyani - 2.pdf' , fileName:'myfile.pdf'});

        cy.get('#file-submit').click();

        cy.wait(3000);

        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');

    })


    it('File upload -  Drag and Drop',()=>{

        cy.visit('https://the-internet.herokuapp.com/upload');

        cy.get('#drag-drop-upload').attachFile('Arti Shiyani - 2.pdf',{subjectType:'drag-n-drop'});

        cy.wait(5000);

        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('rti Shiyani - 2.pdf');

        cy.get('#drag-drop-upload > .dz-preview > .dz-success-mark').should('be.visible');

    })


    it.only('Multiple File upload',()=>{

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        cy.get('#filesToUpload').attachFile(['Arti Shiyani - 2.pdf','Arti Shiyani - 2 copy.pdf','Arti Shiyani - 2 copy.pdf']);

        cy.get("ul[id='fileList'] li").contains('Arti Shiyani - 2.pdf');

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