const Page = require('./page');
const elementUtil = require('../utils/elementUtil')
const constants = require('../../constants')

class homePage extends Page{

    get header(){
        return $("//td[contains(text(),'CRMPRO')]")
    }

    get accountName(){
        return $("//tr/td[contains(text(),'User:')]")
    }

    get homeLink(){
        return $("//a[contains(text(),'Home')]")
    }

    get contactsLink(){
        return $("//a[contains(text(),'Contacts')]")
    }

    get dealsLink(){
        return $("//a[contains(text(),'Deals')]")
    }

    get tasksLink(){
        return $("//a[contains(text(),'Tasks')]")
    }

    get logoutLink(){
        return $("//a[contains(text(),'Logout')]")
    }

    getPageTitle(){
        return elementUtil.dogetPageTitle(constants.HOME_PAGE_TITLE)
    }

    getHeaderText(){
        return elementUtil.dogetText(this.header)
    }

    doswitchFrame(id){
        elementUtil.doswitchFrame(id)
    }
    
    doswitchParentFrame(){
        elementUtil.doswitchParentFrame()
    }

    getAccNameText(){
        return elementUtil.dogetText(this.accountName)
    }

    doclickHomeLink(){
        this.doswitchFrame(1)
        elementUtil.doclick(this.homeLink)
        this.doswitchParentFrame()
    }

    doclickContactsLink(){
        this.doswitchFrame(1)
        elementUtil.doclick(this.contactsLink)
        this.doswitchParentFrame()
    }

    doclickDealsLink(){
        this.doswitchFrame(1)
        elementUtil.doclick(this.dealsLink)
        this.doswitchParentFrame()
    }

    doclickTasksLink(){
        this.doswitchFrame(1)
        elementUtil.doclick(this.tasksLink)
        this.doswitchParentFrame()
    }

    logout(){
        this.doswitchFrame(1)
        elementUtil.doclick(this.logoutLink)
        this.doswitchParentFrame()
    }

    /*overrides method open of Base */
    open (text) {
        return super.open(text)
    }

            //$("//a[contains(text(),'Contacts')]").waitForDisplayed()
        //$("//a[contains(text(),'Contacts')]").moveTo()
        //elementUtil.doclick("//a[contains(text(),'Contacts')]")
}

module.exports = new homePage()