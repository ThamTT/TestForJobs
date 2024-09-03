import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
 class HomeObject {
    /**
     * define selectors using getter methods
     */
    get labelFrom () {
        return $('label*=Điểm đi');
    }

    get labelTo () {
        return $('label*=Điểm đến');
    }

    get inputSearchPlaceFrom () {
        return $('[placeholder="Mã sân bay, Tên sân bay, Tên thành phố..."][data-id="flight_from"]');
    }

    get inputSearchPlaceTo () {
        return $('[placeholder="Mã sân bay, Tên sân bay, Tên thành phố..."][data-id="flight_to"]');
    }

    get liHaNoi (){
        return $('=HAN');
    }

    get liHCM (){
        return $('=SGN');
    }

    get inputDateFrom (){
        return $('#departure_date_flight');
    }

    get inputDateTo (){
        return $('#returning_date_flight');
    }

    get inputpassenger (){
        return $('#flight_passenger');
    }

    get btnplus(){
        return $('//div[@class = "popover-content"]//*[.="(2-12 tuổi)"]//ancestor::div[@class = \'row\' and not(@xpath)]//div[@data-type= "plus"]')
    }
    
    get btnSearch(){
        return $('#search_button')
    }

    get lableTitle(){
        return $('//div[@id= "area_filter_depart"]//div[@class = "title"]')
    }

    get labelDateFrom(){
        return $('//div[@id= "area_filter_depart"]//span//span[@class = "date date-depart"]')
    }

    get labelDateTo(){
        return $('//div[@id= "area_filter_return"]//span//span[@class = "date date-return"]')
    }

    datapickerDate(day) {
        return $(`//div[contains(@class, \'ui-datepicker-group-first\')]//span[text()= \'${day}\' and @class = \'ui-datepicker-day \' ]`);
    }

    datapickerDate2(day) {
        return $(`//div[contains(@class, \'ui-datepicker-group-last\')]//span[text()= \'${day}\' and @class = \'ui-datepicker-day \' ]`);
    }
}

export default new HomeObject();
