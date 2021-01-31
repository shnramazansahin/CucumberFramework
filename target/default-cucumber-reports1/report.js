$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Day18_02_Parametirized_future.feature");
formatter.feature({
  "name": "user should add data",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@dt"
    }
  ]
});
formatter.scenarioOutline({
  "name": "data tables 1",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the datatable page",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks on the  new button",
  "keyword": "And "
});
formatter.step({
  "name": "user enters the firstname \"\u003cfirstname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters the lastname \"\u003clastname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters the position \"\u003cposition\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters the office \"\u003coffice\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters the extention \"\u003cextention\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters the startdate \"\u003cstartdate\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters the salary \"\u003csalary\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on the create button",
  "keyword": "And "
});
formatter.step({
  "name": "user rearch the firstname \"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "verify the name field contains the firstname \"\u003cfirstname\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "this is used to pass the test data",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "position",
        "office",
        "extention",
        "startdate",
        "salary"
      ]
    },
    {
      "cells": [
        "john",
        "annn",
        "teacher",
        "newyork",
        "234",
        "2021-01-27",
        "34534534"
      ]
    },
    {
      "cells": [
        "ali",
        "safa",
        "sdet",
        "minnesota",
        "23",
        "2021-01-29",
        "7890"
      ]
    },
    {
      "cells": [
        "safiye",
        "buyukbay",
        "aktar",
        "manhattan",
        "435",
        "2021-03-20",
        "120000"
      ]
    },
    {
      "cells": [
        "badsfb",
        "bdfb",
        "sbdnn",
        "ndghm",
        "657",
        "2021-03-20",
        "56474567"
      ]
    },
    {
      "cells": [
        "Sam",
        "waltom",
        "boss",
        "benton",
        "788",
        "2021-03-20",
        "9000000"
      ]
    }
  ]
});
formatter.scenario({
  "name": "data tables 1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@dt"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the datatable page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_is_on_the_datatable_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the  new button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_clicks_on_the_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the firstname \"john\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the lastname \"annn\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_lastname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the position \"teacher\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_position(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the office \"newyork\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_office(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the extention \"234\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_extention(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the startdate \"2021-01-27\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_startdate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the salary \"34534534\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_salary(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the create button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_clicks_on_the_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user rearch the firstname \"john\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_rearch_the_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the name field contains the firstname \"john\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.verify_the_name_field_contains_the_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "data tables 1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@dt"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the datatable page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_is_on_the_datatable_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the  new button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_clicks_on_the_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the firstname \"ali\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the lastname \"safa\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_lastname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the position \"sdet\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_position(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the office \"minnesota\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_office(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the extention \"23\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_extention(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the startdate \"2021-01-29\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_startdate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the salary \"7890\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_salary(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the create button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_clicks_on_the_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user rearch the firstname \"ali\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_rearch_the_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the name field contains the firstname \"ali\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.verify_the_name_field_contains_the_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "data tables 1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@dt"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the datatable page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_is_on_the_datatable_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the  new button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_clicks_on_the_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the firstname \"safiye\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the lastname \"buyukbay\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_lastname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the position \"aktar\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_position(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the office \"manhattan\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_office(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the extention \"435\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_extention(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the startdate \"2021-03-20\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_startdate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the salary \"120000\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_salary(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the create button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_clicks_on_the_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user rearch the firstname \"safiye\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_rearch_the_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the name field contains the firstname \"safiye\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.verify_the_name_field_contains_the_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "data tables 1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@dt"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the datatable page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_is_on_the_datatable_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the  new button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_clicks_on_the_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the firstname \"badsfb\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the lastname \"bdfb\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_lastname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the position \"sbdnn\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_position(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the office \"ndghm\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_office(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the extention \"657\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_extention(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the startdate \"2021-03-20\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_startdate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the salary \"56474567\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_salary(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the create button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_clicks_on_the_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user rearch the firstname \"badsfb\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_rearch_the_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the name field contains the firstname \"badsfb\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.verify_the_name_field_contains_the_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "data tables 1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@dt"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the datatable page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_is_on_the_datatable_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the  new button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_clicks_on_the_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the firstname \"Sam\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the lastname \"waltom\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_lastname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the position \"boss\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_position(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the office \"benton\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_office(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the extention \"788\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_extention(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the startdate \"2021-03-20\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_startdate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the salary \"9000000\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_enters_the_salary(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the create button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_clicks_on_the_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user rearch the firstname \"Sam\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.user_rearch_the_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the name field contains the firstname \"Sam\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Day17_01DataNetStepDefinitions.verify_the_name_field_contains_the_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});