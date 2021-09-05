const Page = require('./page');
const elementUtil = require('../utils/elementUtil')
const constants = require('../../constants')

class signUpPage extends Page{

    get editionSelection(){
        return $("select#payment_plan_id")
    }

    get newUserFirstName(){
        return $("//input[@name='first_name']")
    }

    get newUserLastName(){
        return $("//input[@name='surname']")
    }

    get newEmail(){
        return $("//input[@name='email']")
    }

    get newConfirmEmail(){
        return $("//input[@name='email_confirm']")
    }

    get newUserName(){
        return $("//input[@name='username']")
    }

    get newPassword(){
        return $("//input[@name='password']")
    }

    get newConfirmPassword(){
        return $("//input[@name='passwordconfirm']")
    }

    get agreeCheckBox(){
        return $("//input[@name='agreeTerms']")
    }

    get submitBtn(){
        return $("button#submitButton")
    }
    //===============================================//

    get newCompany(){
        return $("input#company_name")
    }

    get newphone(){
        return $("input#phone")
    }

    get newDesc(){
        return $("textarea#service")
    }

    get newAddress(){
        return $("textarea#address")
    }

    get newCity(){
        return $("input#city")
    }

    get newState(){
        return $("input#state")
    }

    get newPIN(){
        return $("input#postcode")
    }

    get country(){
        return $("select.select")
    }

    get billAddress(){
        return $("input[name='copy_address']")
    }

    get continueBtn(){
        return $("button.btn.btn-warning")
    }

    getPageTitle(){
        return elementUtil.dogetPageTitle(constants.SIGNUP_PAGE_TITLE)
    }

    dosetValue(element,val){
        elementUtil.dosetValue(element,val)
    }

    doselectCheckBox(element){
        if(!elementUtil.doisSelected(element)){
            elementUtil.doclick(element)
        }
    }

    doclick(element){
        if(elementUtil.doisEnabled(element)){
            elementUtil.doclick(element)
        }
    }

    doselectByAttribute(element,attribute,val){
        return elementUtil.doselectByAttribute(element,attribute,val)
    }

    /*overrides method open of Base */
    open (text) {
        return super.open(text)
    }

        //$("//a[contains(text(),'Contacts')]").waitForDisplayed()
        //$("//a[contains(text(),'Contacts')]").moveTo()
        //elementUtil.doclick("//a[contains(text(),'Contacts')]")
}

module.exports = new signUpPage()