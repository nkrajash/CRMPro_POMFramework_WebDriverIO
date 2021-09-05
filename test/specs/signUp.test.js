const { assert } = require('chai');
const loginPage = require('../pageobjects/login.page');
const config = require('../../config');
const constants = require('../../constants');
const signUpPage = require('../pageobjects/signUp.page');
const homePage = require('../pageobjects/home.page');
const elementUtil = require('../utils/elementUtil');

describe('CRMPro SignUp page feature tests', () => {
    
    it('verify signUp page with valid title', () => {
        signUpPage.open(config.signupurl)
        const title = signUpPage.getPageTitle()
        console.log('SignUp page title is', title)
        assert.equal( constants.SIGNUP_PAGE_TITLE ,title,'title not found')
    });

    it.skip('verify signUp page entries with valid entries' , () => {
        browser.maximizeWindow()
        browser.deleteCookies()
        signUpPage.doselectByAttribute(signUpPage.editionSelection,'value',1)
        signUpPage.dosetValue(signUpPage.newUserFirstName,'Naveen Kumar')
        signUpPage.dosetValue(signUpPage.newUserLastName, 'Rajashekar')
        signUpPage.dosetValue(signUpPage.newEmail ,'rnavinkmr45.12@gmail.com')
        signUpPage.dosetValue(signUpPage.newConfirmEmail,'rnavinkmr45.12@gmail.com')
        signUpPage.dosetValue(signUpPage.newUserName,'nkrajash')
        signUpPage.dosetValue(signUpPage.newPassword,'CRMPro@12345')
        signUpPage.dosetValue(signUpPage.newConfirmPassword,'CRMPro@12345')
        signUpPage.doselectCheckBox(signUpPage.agreeCheckBox)
        signUpPage.doclick(signUpPage.submitBtn)
        signUpPage.dosetValue(signUpPage.newCompany,'NaveenAutomationLabs')
        signUpPage.dosetValue(signUpPage.newphone,'7975264809' )
        signUpPage.dosetValue(signUpPage.newDesc,'Senior Software Tester')
        signUpPage.dosetValue(signUpPage.newAddress,'Nagarbhavi')
        signUpPage.dosetValue(signUpPage.newCity,'Bangalore')
        signUpPage.dosetValue(signUpPage.newState,'Karnataka')
        signUpPage.dosetValue(signUpPage.newPIN,'560056')
        signUpPage.doselectByAttribute(signUpPage.country,'value','India')
        signUpPage.doselectCheckBox(signUpPage.billAddress)
        signUpPage.doclick(signUpPage.continueBtn)

    })

    it('verify login with newly created credentials' , () => {
        loginPage.open(config.url)
        loginPage.login(config.newusername,config.newpassword)
        const title = homePage.getPageTitle()
        console.log('Login page title is', title)
        assert.equal( constants.HOME_PAGE_TITLE ,title,'title not found')
    })

    it("click on log out", () => {
        homePage.logout()
    })

});