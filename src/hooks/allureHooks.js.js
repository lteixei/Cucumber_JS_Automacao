const { Before, After, Status } = require('@cucumber/cucumber');
const { AllureRuntime, InMemoryAllureWriter } = require('allure-js-commons');
const runtime = new AllureRuntime({ resultsDir: './allure-results' });

Before(function (scenario) {
    this.allure = runtime.startTest(scenario.pickle.name);
});

After(function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        this.allure.status = 'failed';
    } else {
        this.allure.status = 'passed';
    }
    this.allure.endTest();
});
