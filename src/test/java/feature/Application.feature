Feature: Application Login

@RegTest
Scenario: Facebook happy path login
Given User is on facebook home page
When User will login with username "karthik" and password "noone"
Then User will click on Login button
And User will verify facebook header



