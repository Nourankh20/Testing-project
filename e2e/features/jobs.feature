Feature: Jobs
    Manages Jobs information.

    Scenario Outline: Gets the list of jobs based on companyName
        Given a string <string>
        When I send a GET request to fetch jobs
        Then I should get <{}> of jobs


    Examples:
        | string | {} |
        | "Software Engineering Services" | Software Developers Needed! with Security Clearance |
        | "Software Galaxy Systems, LLC" | Software Engineer IV |