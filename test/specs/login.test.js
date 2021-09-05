const { assert } = require('chai');
const loginPage = require('../pageobjects/login.page');
const homePage = require('../pageobjects/home.page');
const config = require('../../config');
const constants = require('../../constants');

describe('CRMPro Login page feature tests', () => {
    
    it('verify login page with valid title', () => {
        loginPage.open(config.url)
        const title = loginPage.getPageTitle()
        console.log('Login page title is', title)
        assert.equal( constants.LOGIN_PAGE_TITLE ,title,'title not found')
    });

    it('is signUp link exists or not' , () => {
        assert.equal(true , loginPage.isSignUpLinkExists(),'Sign Up link not exists')
    })

    it('verify login with valid credentials' , () => {
        loginPage.login(config.username,config.password)
    })

    it("click on log out", () => {
        loginPage.logout()
    })

});