Feature: Register into losestudiantes
    As an user I want to register myself within losestudiantes website in order to rate teachers

Scenario Outline: Register failed without any input

    Given I go to losestudiantes home screen
        When I open the login screen
    
    Examples: 
    | name | lastname | email | university | degree | secondDregree | password | accept |
    |      |          |       |            |        |               |          |        |
    | Ana  | Espinosa | aksak@example.com | Universidad de los Andes | | | aaa | false |

Scenario Outline: Register failed with password less than 8 characters

    Given I go to losestudiantes home screen
        When I open the login screen

Scenario Outline: Register failed with an invalid email format

    Given I go to losestudiantes home screen
        When I open the login screen

Scenario Outline: Register failed with an invalid email format

    Given I go to losestudiantes home screen
        When I open the login screen

Scenario Outline: Register success

    Given I go to losestudiantes home screen
        When I open de login screen