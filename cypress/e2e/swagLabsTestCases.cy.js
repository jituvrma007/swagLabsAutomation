const   homePage = require('../pageObjects/homePage'),
        productListingPage = require('../pageObjects/productListingPage'),
        productDetailsPage = require('../pageObjects/productDetailsPage'),    
        cartDetails = require('../pageObjects/cartDetails'),
        loginCredentials = require('../fixtures/loginCredentials.json')

      
describe('Test cases for "Swag Labs" portal', () => {
       
    beforeEach(() => {
        homePage.open() //Open the browser and visit the baseUrl.
        homePage.performLoginUsingCredentials(loginCredentials.username, loginCredentials.password); //Login using credentials.
    });
       
    it('Verifies total count of product and Price(Low to high) sorting option working on "ProductListingPage" ', () => {
    
        productListingPage.sortProductListingPage('Price (low to high)') //Sorting the products based in 'Low to High Price'
       
        expect(productListingPage.verifyAllProductCount(6)) //Check the count is coming 6
        expect(productListingPage.checkProductPricesAreInLowToHighOrder("$7.99$9.99$15.99$15.99$29.99$49.99")) //Check price should be in same order for the products.
        
    })
    
    it('Verifies product is getting added into cart successfully, from "ProductDetailsPage"', () => {
    
        productListingPage.clickOnProduct('Sauce Labs Backpack')
        productDetailsPage.clickOnAddToCartButton()
        productDetailsPage.clickOnShoppingCartLink()
       
        expect(cartDetails.verifyProductCount(1))
        expect(cartDetails.verifyShoppingCartProductName('Sauce Labs Backpack'))
        expect(cartDetails.verifyShoppingCartProductPrice('$29.99'))
    })

})

