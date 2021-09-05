const { assert } = require('chai');
const loginPage = require('../pageobjects/login.page');
const homePage = require('../pageobjects/home.page');
const config = require('../../config');
const constants = require('../../constants');


describe('CRMPro Home page feature tests', () => {

    it('verify home page with valid title', () => {
        homePage.open(config.url)
        loginPage.login(config.username,config.password)
        const title = homePage.getPageTitle()
        console.log('Home page title is', title)
        assert.equal( constants.HOME_PAGE_TITLE ,title,'title not found')
    });

    it('verify home page with valid header text', () => {
        homePage.doswitchFrame(1)
        assert.equal( constants.HOME_PAGE_HEADER, homePage.getHeaderText(this.header),'Home page header is invalid')
        homePage.doswitchParentFrame()
    })

    it('verify home page logged in Account name', () => {
        homePage.doswitchFrame(1)
        let accname = homePage.getAccNameText(this.accountName)
        accname = accname.split(":")[1].trim()
        assert.equal(config.accountname, accname,'Home page logged in acc name is invalid')
        homePage.doswitchParentFrame()
    })

    it("click on Home Link", () => {
        homePage.doclickHomeLink()
    })

    it("click on Contacts Link", () => {
        homePage.doclickContactsLink()
    })

    it("click on Deals Link", () => {
        homePage.doclickDealsLink()
    })

    it("click on Tasks Link", () => {
        homePage.doclickTasksLink()
    })

    it("click on log out", () => {
        homePage.logout()
    })

});
