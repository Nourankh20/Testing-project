Feature: Internships
    Manages Internships information.

    Scenario Outline: Gets the list of internships
        Given a String <String>
        When I send a GET request to fetch internships
        Then I should get <number> of internships


    Examples:
        | String | number |
        | Teralytics | 2 |
        |  | 0 |