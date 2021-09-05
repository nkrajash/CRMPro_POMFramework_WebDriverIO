class elementUtil{

    doclick(element){
        element.waitForDisplayed()
        element.click()
    }

    dosetValue(element,value){
        element.waitForDisplayed()
        element.setValue(value)
    }

    domaximizeWindow(){
        browser.maximizeWindow()
    }

    dodeleteCookies(){
        browser.deleteCookies()
    }

    dogetText(element){
        element.waitForDisplayed()
        return element.getText()
    }
    
    doselectByAttribute(element,attribute,val){
        element.selectByAttribute(attribute,val)
    }

    doswitchFrame(id){
        browser.switchToFrame(id)
    }

    doswitchParentFrame(){
        browser.switchToParentFrame()
    }

    dogetPageTitle(pageTitle){
        browser.waitUntil( 
            function () {
                return (browser.getTitle() === pageTitle)
            },
            {
                timeout: 15000, //15 secs
                timeoutMsg: 'The title is not displayed after the given time...'
            }
        )
        return browser.getTitle()
    }

    doisDisplayed(element){
        element.waitForDisplayed()
        return element.isDisplayed()
    }

    doisEnabled(element){
        element.waitForEnabled()
        return element.isEnabled()
    }

    doisSelected(element){
        element.waitForEnabled()
        return element.isSelected()
    }

    doisExisting(element){
        element.waitForDisplayed()
        return element.isExisting()
    }

}

module.exports = new elementUtil()