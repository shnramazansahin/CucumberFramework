@try
Feature:login page
  Scenario Outline:postive TestData
    Given user is on the main page
    When  clicks on the login button
    When user enter the  username "<username>"
    When  user enter the  password "<password>"
    Then clicks on the login button on the page
    Examples:
    |username|password |
    |manager |manager2!|

  @negative
  Scenario Outline:negative test
    Given user is on the main page
    When  clicks on the login button
    When user enter the  username "<wrong username>"
    When  user enter the  password "<wrong password>"
    Then clicks on the login button on the page
    Examples:
      |wrong username|wrong password |
      |manager       |manager2       |
      |manage        |manager2!      |
      |manage        |manager2       |