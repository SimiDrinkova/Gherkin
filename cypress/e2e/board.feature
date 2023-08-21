Feature: To-Do App

@smoke
Scenario: Adding a new to-do item
  Given the user is on the to-do app page
  When the user adds a new to-do item with the text "Feed the cat"
  Then the new to-do item should be added to the list
  And the total number of items in the list should be 3
  And the new to-do item should be the last item in the list

  Scenario: Adding a new to-do item and should be visible
  Given the user is on the to-do app page
  When the user adds a new to-do item with the text "Feed the cat"
  Then the new to-do item should be added to the list
  And the total number of items in the list should be 3
  And the new to-do item should be visible


Scenario: Checking off a to-do item as completed
  Given the user is on the to-do app page
  When the user checks off the item "Pay electric bill" as completed
  Then the item "Pay electric bill" should be marked as completed


