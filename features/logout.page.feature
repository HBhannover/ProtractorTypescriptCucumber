 Feature: Logout

    Scenario Outline: User logout successful
    Given Der Benutzer ist gerade bereit angemeldet
    When Benutzer klickt auf Button Logout
    Then Anmeldungsseite wird angezeigt
