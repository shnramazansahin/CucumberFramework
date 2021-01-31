@dt
Feature: user should add data

  Scenario Outline: data tables 1
    Given user is on the datatable page
    And  user clicks on the  new button
    When user enters the firstname "<firstname>"
    When user enters the lastname "<lastname>"
    When user enters the position "<position>"
    When user enters the office "<office>"
    When user enters the extention "<extention>"
    When user enters the startdate "<startdate>"
    When user enters the salary "<salary>"
    And user clicks on the create button
    And user rearch the firstname "<firstname>"
    Then verify the name field contains the firstname "<firstname>"


    Examples: this is used to pass the test data
  |firstname|lastname|position|office |extention|startdate  |salary  |
  |john     |annn    |teacher |newyork|234      |2021-01-27 |34534534|
  |ali      |safa    | sdet   |minnesota|23     | 2021-01-29|7890    |
  |safiye   |buyukbay|aktar  |manhattan|435    |2021-03-20 |120000   |
  |badsfb   |bdfb    |sbdnn   |ndghm  |657      |2021-03-20 |56474567|
  |Sam      |waltom  |boss    |benton |788      |2021-03-20 |9000000 |

