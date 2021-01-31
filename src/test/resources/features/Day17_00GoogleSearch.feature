#every feaature file must start with feature kw
@googlesearch
Feature: user should find the related product on google search

  Background: // it is like before method, all repeated one in one place
    Given user on the google page

  @iphone
  Scenario: TC_01_Iphone search
    When user search for iphone
    Then verify the result has the iphone

    @teapot
  Scenario: TC_02_tea pot search
    When user search for tea pot
    Then verify the result has tea pot

    @flower
  Scenario: TC_03_flower search
    When user search for flower
    Then verify the result has flower

  @bmw
  Scenario: Tc_04_bmw search
    When user search for bmw
    Then verify the result bmw
