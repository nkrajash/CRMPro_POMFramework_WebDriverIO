const Page = require('./page');
const elementUtil = require("../utils/elementUtil")
const constants = require('../../constants');
const config = require("../../config");
const homePage = require('./home.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class loginPage extends Page{
    /**
     * define selectors using getter methods
     */
     //page locators
    get inputUsername () { return $("//input[@name='username']") } //By xpath
    get inputPassword () { return $("input[name='password']") } //By CSS
    get btnSubmit () { return $("input[type='submit']") } //By CSS
    get signUpLink() { return $("=Sign Up")} //By link text 

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
     //page actions
    getPageTitle(){
        return elementUtil.dogetPageTitle(constants.LOGIN_PAGE_TITLE)
    }

    isSignUpLinkExists(){
        return elementUtil.doisDisplayed(this.signUpLink)
    }

    login (username, password) {
        elementUtil.domaximizeWindow()
        elementUtil.dodeleteCookies()
        elementUtil.dosetValue(this.inputUsername,username)
        elementUtil.dosetValue(this.inputPassword,password)
        elementUtil.doclick(this.btnSubmit)
    }

    logout(){
       homePage.logout()
    }

    /*overrides method open of Base */
    open (text) {
        return super.open(text)
    }

}

module.exports = new loginPage();
