1. Prerquisites:

- Node js Downloaded
- Cypress installed with package.json file
- Node modules folder with all third-party libraries and dependencies for Cypress

2. How to run the script:

- in order to run the script use the following command on the bash terminal:

  npx cypress run --spec "cypress/integration/examples/Test1.js"

- in order to run test with UI interface use the command:

npx cypress open

locate the test file and execute in Cypress UI

3.  Expected output:

If all tests past cypress log should be "All tests have passed", otherwise cypress clearly indicates exactly what failed
