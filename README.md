# swagLabsAutomation :about the project
This is a sample automation testing project for a web application using Cypress.

### Project structure
```

├── cypress
│   ├── e2e
│   │   ├── swagLabsTestCases.cy.js
│   │   └── ...
│   ├── fixtures
│   │   ├── loginCredentials.json
│   │   └── ...
│   ├── pageObjects
│   │   ├── basePage.js
│   │   ├── cartDetails.js
│   │   ├── homePage.js
│   │   ├── productDetailsPage.js
│   │   ├── productListingPage.js
│   │   └── ...
│   ├── support
│   │   ├── commands.js
│   │   ├── e2e.js
│   │   └── ...
├── node_modules
└── cypress-config.js
└── Dockerfile
└── package-lock.json
└── package.json
```
## Getting Started
### Prerequisites
- NodeJS

### Installation
1. Clone the repo
```
git clone https://github.com/jituvrma007/swagLabsAutomation.git
```
2. Install NPM packages
```
$ npm install
```
### Running the tests locally
- Running the tests in headless mode with Chrome
```
$ npm run cy:run-chrome
```
- Running from Cypress Ui Runner:
```
$ npm run cy:open
```

### Running the tests through Docker
- Running the tests from one single command
```
$ docker run -it -v ${PWD}:/cypress -w /cypress cypress/included:10.1.0 --config-file cypress.config.js  --browser chrome
```
- Running from Dockerfile: i.e - building the image locally, then running the test cases inside the container
```
docker build -t swaglabsautomation:1.0.0 .
docker run -i -v swaglabsautomation -t swaglabsautomation:1.0.0 --config-file cypress.config.js
```
