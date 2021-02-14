@dtables
Feature: Room Reservation
  Scenario: user should be able to book the room
    Given user is on the log in page
    And user enters username and password
    |manager|manager2!|
    And user clicks on the login button
    And user goes to room reservation page
    And enter all required fields and click save button
    |price|date_start|date_end|adult|children|contact_name|contact_phone|contact_email|notes|
    |2222|2/10/2021|02/24/2021|3|4|mark|(123) 456-7890|abc@gmial.com|no notes|
    Then  verify the succes message
    Then user takes the screenshot
    Then user closes the application

