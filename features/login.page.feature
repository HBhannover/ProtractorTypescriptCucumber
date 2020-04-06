
 Feature: erfolgreicheAnmeldung

    Scenario Outline: User login successful
    Given Anmeldungsseite wird angezeigt
    When Benutzer gibt Usename als <username> und Passwort als <passwort> ein
    Then Benutzer ist jetzt in seinem Homepage

    Examples:
    | username | passwort |
    | "mustermantest4@gmail.com"  | "Test4test!" |

    # Scenario: User login successful
    # Given Anmeldungsseite wird angezeigt
    # When Benutzer gibt Usename als "mustermantest4@gmail.com" ein
    # And Benutzer gibt Passwort als "Test4test!" ein
    # And Benutzer klickt auf Button Anmelden
    # Then Benutzer landet sich in seinem Homepage
