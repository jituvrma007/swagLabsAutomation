import basePage from "./basePage";

class productDetailsPage extends basePage{
     
    get addToCartButton() { return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'); }
    get shoppingCartLink() { return cy.get('.shopping_cart_link'); }

    clickOnAddToCartButton() {
        return this.addToCartButton.click();
    }

    clickOnShoppingCartLink() {
        return this.shoppingCartLink.click();
    }
}

module.exports = new productDetailsPage();