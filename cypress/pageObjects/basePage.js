export default class basePage {
    //Hold the script execution for given microsecond
    static pause(ms) {
        cy.wait(ms)
    }

    //Log comments on cypress.
    static logInfo(message) {
        cy.log(message)
    }
}
