Feature: Internships
    Manages Internships information.

    Scenario Outline: Gets the list of internships
        Given a string <string>
        When I send a GET request to fetch internships
        Then I should get <number> of internships


    Examples:
        | string | number |
        | Teralytics | 2 |
        |  | 30 |