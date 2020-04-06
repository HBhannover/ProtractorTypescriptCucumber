 Feature: Logout

    Scenario Outline: User logout successful
    Given Benutzer ist jetzt in seinem Homepage
    When Benutzer klickt auf Button Logout
    Then Anmeldungsseite wird angezeigt
