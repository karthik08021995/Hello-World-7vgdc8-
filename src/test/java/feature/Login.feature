Feature: Application Login

Background:
Given Validate the browser
When launch the browser
Then verify the browser

@RegTest
Scenario: Facebook happy path login
Given User is on facebook home page
When User will login with username "karthik" and password "noone"
Then User will click on Login button
And User will verify facebook header

@RegTest
Scenario: Facebook happy path login page 2
Given User is on facebook home page
When User will login with username "Wolverine" and password "noone"
Then User will click on Login button
And User will verify facebook header

@RegTest
Scenario: Facebook happy path login page 3
Given User is on facebook home page
When User will login with following details
| karthik | chennai | india | tester | automation | 25 |
Then User will click on Login button
And User will verify facebook header

@RegTest @SmokeTest
Scenario Outline: Facebook happy path login page 4
Given User is on facebook home page
When User will login with following details of <username> and <password>
Then User will click on Login button
And User will verify facebook header

Examples:
|username |password |
|user1    |pass1    |
|user2    |pass2    |

