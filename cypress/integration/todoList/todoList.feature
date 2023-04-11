Feature: ToDo list of items

Background: 
Given I am on the todo list website

Scenario: Add items to todo list
    When I add the following tasks to the list:
      | task           |
      | buy some cheese|
      | feed the cat   |
    Then I should see the following tasks on the list:
      | task           |
      | buy some cheese|
      | feed the cat   |
    And the count of items on the list should be 2

Scenario: Toggle item on the list
    When I add the following tasks to the list:
      | task           |
      | buy some cheese|
      | feed the cat   |
    And I toggle the task "buy some cheese"
    Then the task "buy some cheese" should have a toggled checkbox