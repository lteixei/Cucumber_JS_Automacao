Feature: Página Inicial

  Scenario: Abrir página inicial
    Given que acesso a página inicial
    When clico no menu Products
    Then devo ver o texto "AutomationExercise"
