Feature: companies
    Manages companies information.

    Scenario Outline: Gets the list of companies
        Given a location <string>
        When I send a GET request to fetch companies
        Then I should get <number> of companies


    Examples:
        | string                         | number |
        | '6th of October, Giza, Egypt ' | 3      |