import basePage from "./basePage";

class productListingPage extends basePage{

    get sortSelectorDropDown() { return cy.get('[data-test="product_sort_container"]'); }
    get displayedPriceOfProduct() { return cy.get('.pricebar .inventory_item_price'); }
    findProduct(productName) { return cy.contains(productName); }
    
    clickOnProduct(productName) {
        return this.findProduct(productName).click();
    }

    verifyAllProductCount(totalProductCount) {
        return this.displayedPriceOfProduct.should('have.length', totalProductCount);
    }

    sortProductListingPage(option) {
        return this.sortSelectorDropDown.select(option, {force: true});
    }

    checkProductPricesAreInLowToHighOrder(priceList){
        
        this.displayedPriceOfProduct.then((displayedPriceOfProduct) => {
            cy.wrap(displayedPriceOfProduct.text()).should('equal', priceList) 
        })

        
    }

}
module.exports = new productListingPage();