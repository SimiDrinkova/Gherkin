import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

const newItem ='Feed the cat'

Given('the user is on the to-do app page', () => {
  cy.visit('https://example.cypress.io/todo');
});

// Scenario: Adding a new to-do item
When('the user adds a new to-do item with the text {string}', (newItem) => {
  cy.get('[data-test=new-todo]').type(`${newItem}{enter}`);
});

Then('the new to-do item should be added to the list', () => {
  cy.get('.todo-list li').should('have.length', 3);
});

Then('the total number of items in the list should be {int}', (expectedCount) => {
  cy.get('.todo-list li').should('have.length', expectedCount);
});

Then('the new to-do item should be the last item in the list', (newItem) => {
  cy.get('.todo-list li').last().should('have.text', 'Feed the cat');
});


//Scenario: Adding a new to-do item and should be visible
Then('the new to-do item should be visible', (newItem) => {
  cy.get('.todo-list li').last().should('be.visible');
});


// Scenario: Checking off a to-do item as completed
When('the user checks off the item "Pay electric bill" as completed', ()=>{
  cy.contains('Pay electric bill')
  .parent()
  .find('input[type=checkbox]')
  .check()
})

Then('the item "Pay electric bill" should be marked as completed', ()=>{
  cy.contains('Pay electric bill')
  .parents('li')
  .should('have.class', 'completed')
})
