$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Day18_01_Parameterizing_future_file.feature");
formatter.feature({
  "name": "user should find the related product on google search",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.background({
  "name": "going to google home page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the google page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Day17_GoogleSearchStepDefinitions.user_on_the_google_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_01_Iphone search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user search for \"iphone\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_GoogleSearchStepDefinitions.user_search_for(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the result has \"iphone\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Day17_GoogleSearchStepDefinitions.verify_the_result_has(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "going to google home page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the google page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Day17_GoogleSearchStepDefinitions.user_on_the_google_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_02_apple search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user search for \"apple\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_GoogleSearchStepDefinitions.user_search_for(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the result has \"apple\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Day17_GoogleSearchStepDefinitions.verify_the_result_has(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "going to google home page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the google page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Day17_GoogleSearchStepDefinitions.user_on_the_google_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_03_flower search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user search for \"flower\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_GoogleSearchStepDefinitions.user_search_for(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the result has \"flower\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Day17_GoogleSearchStepDefinitions.verify_the_result_has(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});