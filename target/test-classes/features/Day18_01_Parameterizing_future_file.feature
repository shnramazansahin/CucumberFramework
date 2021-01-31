@regression
Feature: user should find the related product on google search
  Background:going to google home page
    Given user on the google page

  Scenario: TC_01_Iphone search
    When user search for "iphone"
    Then verify the result has "iphone"

  Scenario: TC_02_apple search
    When user search for "apple"
    Then  verify the result has "apple"

  Scenario: TC_03_flower search
    When user search for "flower"
    Then verify the result has "flower"
