import {When, Then, Given} from "cypress-cucumber-preprocessor/steps"
import {TODOLIST} from "./todoListConstants.js"

Given ("I am on the todo list website",() =>{
  cy.visit(TODOLIST.WEBSITE_URL);
  cy.viewport(TODOLIST.BROWSER_WIDTH, TODOLIST.BROWSER_HEIGHT);
});

When("I add the following tasks to the list:", (dataTable) => {
    dataTable.hashes().forEach((row) => {
      cy.get(TODOLIST.TODO_INPUT_CLASS).type(`${row.task}{enter}`);
    });
  });

When("I toggle the task {string}", (taskName) => {
    cy.contains(taskName)
      .parent()
      .find(TODOLIST.TODO_CHECKBOX_TYPE)
      .check();
  });
  
Then("I should see the following tasks on the list:", (dataTable) => {
    dataTable.hashes().forEach((row, index) => {
      cy.get(TODOLIST.TODO_LIST_CLASS_LI).eq(index).should("contain", row.task);
    });
  });
  
Then("the count of items on the list should be {int}", (count) => {
    cy.get(TODOLIST.TODO_COUNT_CLASS).should("contain", count);
  });

  
Then("the task {string} should have a toggled checkbox", (taskName) => {
    cy.contains(taskName)
      .parent()
      .find(TODOLIST.TODO_CHECKBOX_TYPE)
      .should(TODOLIST.TODO_CHECKBOX_CHECKED);
  });