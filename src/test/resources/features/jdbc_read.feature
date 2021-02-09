@dbread
Feature: read data
  Scenario: reading hotel reservation
    Given user connects the database
    And user gets "Price" from "tHOTELROOM" table
    And  user read all rows in the "Price" column
    And users gets the value in row 2 in "Price" column and verifies the value is "4000.0000"
    And users gets the value in row 5 in "Price" column and verifies the value is "470.0000"

