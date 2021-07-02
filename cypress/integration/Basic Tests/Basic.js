///    <reference types="cypress" />

describe('Basic Tests', () => {

    beforeEach(function () {

        cy.visit("https://r00tdada.github.io/GEP_Techathon_21/web/Blunder's%20Pride.html")

        cy.fixture('culture').then((culture) => {

            for (var language in culture) {

                var selectedLanguage = cy.get('#country')

                if (selectedLanguage.should('have.value', language)) {

                    cy.fixture(culture[language].toString().toLowerCase()).then((currentLanguage) => {
                        this.cul = currentLanguage
                    })

                    break
                }
            }
        })
    })

    // it('Home Page Loading Test', function () {
    //     cy.wait(1000)
    //     cy.get('#pagetype').should('have.text', this.cul.pageType)
    // });

    // it('Testing First Name Block', function () {
    //     cy.wait(1000)
    //     cy.log('**checking field name**')
    //     cy.get('#fname').should('have.text', this.cul.firstName)
    //     cy.wait(1000)
    //     cy.log('**checking placeholder**')
    //     cy.get('#firstName').invoke('attr', 'placeholder').should('contain', this.cul.firstnameplaceholder)
    //     cy.wait(1000)
    //     cy.log('**checking no. of inputs**')
    //     cy.get('#firstName').should('have.length',1)
    //     cy.wait(1000)
    //     cy.log('**checking if it is empty or not**')
    //     cy.get('input[id=firstName]').invoke('val').should('be.empty')
    //     cy.wait(1000)
    //     cy.log('Enter the first name')
    //     cy.get('#firstName').type(this.cul.userfirstname,{delay:100}) 
    //     cy.wait(1500)
    // });

    // it('Testing Last Name Block', function () {
    //     cy.wait(1000)
    //     cy.log('**checking field name**')
    //     cy.get('#lname').should('have.text', this.cul.LastName)
    //     cy.wait(1000)
    //     cy.log('**checking placeholder**')
    //     cy.get('#lastName').invoke('attr', 'placeholder').should('contain', this.cul.lastnameplaceholder)
    //     cy.wait(1000)
    //     cy.log('**checking no. of inputs**')
    //     cy.get('#lastName').should('have.length',1)
    //     cy.wait(1000)
    //     cy.log('**checking if it is empty or not**')
    //     cy.get('input[id=lastName]').invoke('val').should('be.empty')
    //     cy.wait(1000)
    //     cy.log('Enter the last name')
    //     cy.get('#lastName').type(this.cul.userlastname,{delay:100}) 
    //     cy.wait(1500)

    // });

    // it('Testing Email Block', function () {

    //     cy.wait(1000)
    //     cy.log('**checking field name**')
    //     cy.get('#email').should('have.text', this.cul.Email);
    //     cy.wait(1000)
    //     cy.log('**checking placeholder**')
    //     cy.get('#emailid').invoke('attr', 'placeholder').should('contain', this.cul.emailplaceholder)
    //     cy.wait(1000)
    //     cy.log('**checking no. of inputs**')
    //     cy.get('#emailid').should('have.length', 1)
    //     cy.wait(1000)
    //     cy.log('**checking if it is empty or not**')
    //     cy.get('input[id=emailid]').invoke('val').should('be.empty')
    //     cy.wait(1000)
    //     cy.log('Enter the email')
    //     cy.get('#emailid').type(this.cul.emailid, { delay: 100 })
    //     cy.wait(1500)

    // });

    // it('Testing Mobile Block', function () {
    //     cy.wait(1000)
    //     cy.log('**checking field name**')
    //     cy.get('#mobile').should('have.text', this.cul.Mobile);
    //     cy.wait(1000)
    //     cy.log('**checking placeholder**')
    //     cy.get('#mobileno').invoke('attr', 'placeholder').should('contain', this.cul.mobileplaceholder)
    //     cy.wait(1000)
    //     cy.log('**checking no. of inputs**')
    //     cy.get('#mobileno').should('have.length', 1)
    //     cy.wait(1000)
    //     cy.log('**checking if it is empty or not**')
    //     cy.get('input[id=mobileno]').invoke('val').should('be.empty')
    //     cy.wait(1000)
    //     cy.log('Enter the email')
    //     cy.get('#mobileno').type(this.cul.mobileno, { delay: 100 })
    //     cy.wait(1500)

    // });

    // it('Testing Institute Block', function () {
    //     cy.wait(1000)
    //     cy.log('**checking field name**')
    //     cy.get('#inst').should('have.text', this.cul.Institute);
    //     cy.wait(1000)
    //     cy.log('**checking placeholder**')
    //     cy.get('#instname').invoke('attr', 'placeholder').should('contain', this.cul.instplaceholder)
    //     cy.wait(1000)
    //     cy.log('**checking no. of inputs**')
    //     cy.get('#instname').should('have.length', 1)
    //     cy.wait(1000)
    //     cy.log('**checking if it is empty or not**')
    //     cy.get('input[id=instname]').invoke('val').should('be.empty')
    //     cy.wait(1000)
    //     cy.log('Enter the email')
    //     cy.get('#instname').type(this.cul.instname, { delay: 100 })
    //     cy.wait(1500)

    // });
    // it('Testing Graduation Year',function(){
    //     cy.wait(1000)
    //     cy.log('**checking field name**')c
    //     cy.get('#gradyr').should('have.text',this.cul.Gradyr)
    //     cy.wait(1000)
    // cy.log('**checking inputs year**')
    // cy.get('#gradyear').find('option').then(options => {
    //     const yr = [...options].map(o => o.text)
    //     expect(yr).to.deep.eq([this.cul.selectyr1,this.cul.selectyr2,this.cul.selectyr3,this.cul.selectyr4])
    // })
    //     cy.wait(1000)
    //     cy.log("Selecting graduation yrs")
    //     cy.get('#gradyear').select(this.cul.selectyr2)
    //     cy.wait(1500)
    // });
    it('Testing Project Category and radio', function () {
        cy.wait(1000)
        cy.log('**checking field name**')
        cy.get('#pcat').should('have.text', this.cul.Projectcat);
        cy.wait(1000)
        cy.log('**checking category name**')
        cy.get('#pcattype').find('label').then(label => {
            const yr = [...label].map(o => o.text)
            expect(yr).to.deep.eq([this.cul.category1,this.cul.category2,this.cul.category3,this.cul.category4])
        })
        cy.wait(1200)
        cy.log('**Initially checking radio button')
        cy.get('#inpcat1').should('be.visible').should('not.be.checked')
        cy.get('#inpcat2').should('be.visible').should('be.checked')
        cy.get('#inpcat3').should('be.visible').should('not.be.checked')
        cy.wait(1200)
        cy.log('Checking radio button ' + this.cul.category3)
        cy.get('#inpcat3').click()
        cy.get('#inpcat1').should('be.visible').should('not.be.checked')
        cy.get('#inpcat2').should('be.visible').should('not.be.checked')
        cy.get('#inpcat3').should('be.visible').should('be.checked')
        cy.wait(1500)
    });
    // it('Testing Project Idea Block',function(){
    //     cy.wait(1000)
    //     cy.get('#idea').should('have.text',this.cul.idea);
    //     cy.wait(1000)
    //     cy.log('**checking no. of inputs**')
    //     cy.get('#cc-number').should('have.length', 1)
    //     cy.wait(1000)
    //     cy.log('**checking if it is empty or not**')
    //     cy.get('input[id=cc-number]').invoke('val').should('be.empty')
    //     cy.wait(1000)
    //     cy.log('Enter the project idea')
    //     cy.get('#cc-number').type(this.cul.projectidea, { delay: 100 })
    //     cy.wait(1500)
    // });

})