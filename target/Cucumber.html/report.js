$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Application.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Facebook happy path login",
  "description": "",
  "id": "application-login;facebook-happy-path-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on facebook home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User will login with username \"karthik\" and password \"noone\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User will click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User will verify facebook header",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_on_facebook_home_page()"
});
formatter.result({
  "duration": 190297725,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "karthik",
      "offset": 31
    },
    {
      "val": "noone",
      "offset": 54
    }
  ],
  "location": "StepDefinition.user_will_login_with_username_something_and_password_something(String,String)"
});
formatter.result({
  "duration": 2331473,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_will_click_on_login_button()"
});
formatter.result({
  "duration": 98414,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_will_verify_facebook_header()"
});
formatter.result({
  "duration": 99753,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "launch the browser",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "verify the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.validate_the_browser()"
});
formatter.result({
  "duration": 302606,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.launch_the_browser()"
});
formatter.result({
  "duration": 226620,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.verify_the_browser()"
});
formatter.result({
  "duration": 260094,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Facebook happy path login",
  "description": "",
  "id": "application-login;facebook-happy-path-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User is on facebook home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User will login with username \"karthik\" and password \"noone\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User will click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User will verify facebook header",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_on_facebook_home_page()"
});
formatter.result({
  "duration": 59584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "karthik",
      "offset": 31
    },
    {
      "val": "noone",
      "offset": 54
    }
  ],
  "location": "StepDefinition.user_will_login_with_username_something_and_password_something(String,String)"
});
formatter.result({
  "duration": 220595,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_will_click_on_login_button()"
});
formatter.result({
  "duration": 43851,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_will_verify_facebook_header()"
});
formatter.result({
  "duration": 37157,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "launch the browser",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "verify the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.validate_the_browser()"
});
formatter.result({
  "duration": 342775,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.launch_the_browser()"
});
formatter.result({
  "duration": 238671,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.verify_the_browser()"
});
formatter.result({
  "duration": 206535,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Facebook happy path login page 2",
  "description": "",
  "id": "application-login;facebook-happy-path-login-page-2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is on facebook home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User will login with username \"Wolverine\" and password \"noone\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User will click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User will verify facebook header",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_on_facebook_home_page()"
});
formatter.result({
  "duration": 257081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wolverine",
      "offset": 31
    },
    {
      "val": "noone",
      "offset": 56
    }
  ],
  "location": "StepDefinition.user_will_login_with_username_something_and_password_something(String,String)"
});
formatter.result({
  "duration": 576425,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_will_click_on_login_button()"
});
formatter.result({
  "duration": 248378,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_will_verify_facebook_header()"
});
formatter.result({
  "duration": 189463,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "launch the browser",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "verify the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.validate_the_browser()"
});
formatter.result({
  "duration": 301602,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.launch_the_browser()"
});
formatter.result({
  "duration": 201179,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.verify_the_browser()"
});
formatter.result({
  "duration": 276831,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Facebook happy path login page 3",
  "description": "",
  "id": "application-login;facebook-happy-path-login-page-3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User is on facebook home page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User will login with following details",
  "rows": [
    {
      "cells": [
        "karthik",
        "chennai",
        "india",
        "tester",
        "automation",
        "25"
      ],
      "line": 26
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User will click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User will verify facebook header",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_on_facebook_home_page()"
});
formatter.result({
  "duration": 242688,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_will_login_with_following_details(DataTable)"
});
formatter.result({
  "duration": 2374989,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_will_click_on_login_button()"
});
formatter.result({
  "duration": 272145,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_will_verify_facebook_header()"
});
formatter.result({
  "duration": 201849,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Facebook happy path login page 4",
  "description": "",
  "id": "application-login;facebook-happy-path-login-page-4",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@RegTest"
    },
    {
      "line": 30,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "User is on facebook home page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User will login with following details of \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User will click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User will verify facebook header",
  "keyword": "And "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "application-login;facebook-happy-path-login-page-4;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 38,
      "id": "application-login;facebook-happy-path-login-page-4;;1"
    },
    {
      "cells": [
        "user1",
        "pass1"
      ],
      "line": 39,
      "id": "application-login;facebook-happy-path-login-page-4;;2"
    },
    {
      "cells": [
        "user2",
        "pass2"
      ],
      "line": 40,
      "id": "application-login;facebook-happy-path-login-page-4;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "launch the browser",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "verify the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.validate_the_browser()"
});
formatter.result({
  "duration": 257081,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.launch_the_browser()"
});
formatter.result({
  "duration": 229297,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.verify_the_browser()"
});
formatter.result({
  "duration": 183104,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Facebook happy path login page 4",
  "description": "",
  "id": "application-login;facebook-happy-path-login-page-4;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@RegTest"
    },
    {
      "line": 30,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "User is on facebook home page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User will login with following details of user1 and pass1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User will click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User will verify facebook header",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_on_facebook_home_page()"
});
formatter.result({
  "duration": 260763,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 42
    },
    {
      "val": "pass1",
      "offset": 52
    }
  ],
  "location": "StepDefinition.user_will_login_with_following_details_of_and(String,String)"
});
formatter.result({
  "duration": 416753,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_will_click_on_login_button()"
});
formatter.result({
  "duration": 182434,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_will_verify_facebook_header()"
});
formatter.result({
  "duration": 150299,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "launch the browser",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "verify the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.validate_the_browser()"
});
formatter.result({
  "duration": 274153,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.launch_the_browser()"
});
formatter.result({
  "duration": 199840,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.verify_the_browser()"
});
formatter.result({
  "duration": 164358,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Facebook happy path login page 4",
  "description": "",
  "id": "application-login;facebook-happy-path-login-page-4;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@RegTest"
    },
    {
      "line": 30,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "User is on facebook home page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User will login with following details of user2 and pass2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User will click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User will verify facebook header",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_on_facebook_home_page()"
});
formatter.result({
  "duration": 470311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 42
    },
    {
      "val": "pass2",
      "offset": 52
    }
  ],
  "location": "StepDefinition.user_will_login_with_following_details_of_and(String,String)"
});
formatter.result({
  "duration": 334742,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_will_click_on_login_button()"
});
formatter.result({
  "duration": 222603,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_will_verify_facebook_header()"
});
formatter.result({
  "duration": 183438,
  "status": "passed"
});
});