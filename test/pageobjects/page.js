import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    
    open () {
        browser.maximizeWindow()
        return browser.navigateTo('https://www.bestprice.vn/')
    }
}
