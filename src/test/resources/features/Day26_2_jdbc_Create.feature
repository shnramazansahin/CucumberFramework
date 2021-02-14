@dbcreate1
Feature: Create hotel
  Background: Connecting the database
    Given user connect to the database with DBUtils
  Scenario:  Creating new hotels
    Given user creates a new hotel with a new data provided
    Then verify wheater the hotel is created
