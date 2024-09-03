import HomeObject from '../opjects/home.obj.js';
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page{
    
    constructor() {
        super();
        this.dateFrom = "";
        this.dateTo = "";
    }

    async selectDate(){
        let date = new Date();
        let day = date.getDate()//1 
        date.setDate(day + 3); 
        this.dateFrom = date.getDate();
        await HomeObject.inputDateFrom.click();
        await HomeObject.datapickerDate(date.getDate()).click();
        await HomeObject.inputDateTo.click();
        date.setDate(day + 8);
        this.dateTo = date.getDate();
        if(this.dateTo < this.dateFrom){
            await HomeObject.datapickerDate2(this.dateTo).click();
        }else{
            await HomeObject.datapickerDate(this.dateTo).click();
        }
    }

    async searchPlace (fromPlace, toPlace) {
        await HomeObject.labelFrom.click();
        await HomeObject.inputSearchPlaceFrom.setValue(fromPlace);
        await HomeObject.liHaNoi.click();
        await HomeObject.labelTo.click();
        await HomeObject.inputSearchPlaceTo.setValue(toPlace);
        await HomeObject.liHCM.click();
        await HomeObject.inputDateFrom.click();
        await this.selectDate();
        await HomeObject.inputpassenger.click()
        await HomeObject.btnplus.click()
        await HomeObject.btnSearch.click()
    }

    async verifyPlace(){
        await expect(HomeObject.lableTitle).toHaveText(
           expect.stringContaining('Hà Nội'))
        await expect(HomeObject.lableTitle).toHaveText(
            expect.stringContaining('Hồ Chí Minh'));
        await expect(HomeObject.labelDateFrom).toHaveText(
            expect.stringContaining(this.dateFrom + ""));    
        await expect(HomeObject.labelDateTo).toHaveText(
            expect.stringContaining(this.dateTo + ""));   
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    async open () {
       return super.open();
    }
}

export default new HomePage();
