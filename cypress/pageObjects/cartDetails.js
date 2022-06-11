import basePage from "./basePage";

class cartPage extends basePage{

    get shoppingCartProductCount() { return cy.get('.shopping_cart_badge'); }
    get shoppingCartProductName() { return cy.get('.inventory_item_name'); }
    get shoppingCartProductPrice() { return cy.get('.inventory_item_price'); }

    verifyProductCount(totalProductCount){
        return this.shoppingCartProductCount.should('have.text', totalProductCount);
    }

    verifyShoppingCartProductName(productName){
        return this.shoppingCartProductName.should('have.text', productName);
    }

    verifyShoppingCartProductPrice(productPrice){
        return this.shoppingCartProductPrice.should('have.text', productPrice);
    }
}

module.exports = new cartPage();