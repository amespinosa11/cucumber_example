Feature: Register into losestudiantes
    As an user I want to register myself within losestudiantes website in order to rate teachers

Scenario Outline: Register with multiple error scenarios

    Given I go to losestudiantes home screen
        When I open the login screen
        And I fill first info with <name> and <lastname> and <email>
        And I fill degree info with <university> and <degree>
        And I fill last info with <password> and <accept>
        And I try to register
        Then I expect to see register page
    
    Examples: 
    | name | lastname | email | university | degree | password | accept |
    |      |          |       |            |        |               |          |
    | Ana  |          |       |            |        |               |          |
    | Ana  | Espinosa |       |            |        |               |          |
    | Ana  | Espinosa | jashfjsash@ksackjs.com |            |        |               |          |
    | Ana  | Espinosa | jashfjsash@ksackjs.com | universidad-de-los-andes | 9 |               |          |
    | Ana  | Espinosa | jashfjsash@ksackjs.com | universidad-de-los-andes | 9 | ajskhjsdhjdh |          |
    | Ana  | Espinosa | aksak@example.com | universidad-de-los-andes | 9 | aaa | false |
    | Ana  | Espinosa | aksak | universidad-de-los-andes | 9 | aaaaaaaaaa | false |

Scenario Outline: Register with success

    Given I go to losestudiantes home screen
        When I open the login screen
        And I fill first info with <name> and <lastname> and <email>
        And I fill degree info with <university> and <degree>
        And I fill last info with <password> and <accept>
        And I try to register
        Then I expect to login with success    
    
    Examples: 
    | name | lastname | email | university | degree | password | accept |
    | Ana  | Espinosa | aksak@asjhfj.com | universidad-de-los-andes | 9 | aaaaaaaaaa | true |