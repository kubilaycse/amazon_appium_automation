const { default: homeScreen } = require("../../screens/android/home.screen")
const { default: welcomeScreen } = require("../../screens/android/welcome.screen")

describe('Card and Items Suites', () =>{
    beforeEach(async () =>{
        driver.pause(5000)
        await expect(welcomeScreen.goToTR).toBeDisplayed()
        await (await welcomeScreen.goToTR).click()
        await expect(welcomeScreen.logo).toBeDisplayed()
        await (await welcomeScreen.skipSigninBtn).click()
        
    })
    it('Add & delete item from card', async () =>{
        await homeScreen.searchIcon.click()
        await (await homeScreen.searchArea).setValue('kalem')
        await expect(homeScreen.searchOutputs).toBeDisplayed()
        const searchOutput = await homeScreen.searchOutputs
        await searchOutput[1].click()
        await homeScreen.primeEnable.click()
        const itemOutput = await homeScreen.itemCards
        await itemOutput.click()
        await (await $('android= new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Sepete Ekle")')).click()
        
        //await (await homeScreen.bitti).click()
        await homeScreen.goToCard.click()
        await (await homeScreen.deleteFromCard).click()

    })
    
})