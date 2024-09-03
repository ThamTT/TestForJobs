import HomePage from '../pageobjects/home.page.js'

describe('Search booking travel', () => {
    it('from HaNoi to HoChiMinh', async () => {
        await HomePage.open();
        await HomePage.searchPlace('HaN', 'SGN');
        await HomePage.verifyPlace();
    })
})

