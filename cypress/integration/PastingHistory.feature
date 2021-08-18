Feature: Edit Menu - Pasting History

  As a content creator
  I want to manage pasted information by the history
  So that I can save time writing documents

  Background: Paste content
    Given the editor is ready and empty
    When I paste into the editor "Hello "
    When I paste into the editor "World"
    Then the editor content should be "Hello World"

  Scenario: Undo pasting twice
    When I paste into the editor "World"
    Then the editor content should be ""

  Scenario: Redo pasting twice
    When I paste into the editor "Hello"
    Then the editor content should be ""