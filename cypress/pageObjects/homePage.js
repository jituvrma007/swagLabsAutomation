import basePage from "./basePage";

class homePage extends basePage{

    get usernameInputBox() { return cy.get('#user-name'); }
    get passwordInputBox() { return cy.get('#password'); }
    get LoginButton() { return cy.get('#login-button'); }
  
    open(){
        cy.visit('/');
    }

    performLoginUsingCredentials(username, password){
        this.inputUsername(username);
        this.inputPassword(password);
        this.clickLoginButton();
    }

    inputUsername(username) {
        this.usernameInputBox
            .clear()
            .type(username);
    }

    inputPassword(password) {
        this.passwordInputBox
            .clear()
            .type(password);
    }

    clickLoginButton() {
       return this.LoginButton.click();
    }

}

module.exports = new homePage();