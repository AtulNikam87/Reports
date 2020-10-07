$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/restApiFunctionalTests/EndToEndApiTest.feature");
formatter.feature({
  "name": "End to End Rates API Automation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify Rates API for Past Date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RateApi_PastDate"
    }
  ]
});
formatter.step({
  "name": "User Execute Get method for Rates Api for \"Past Date\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User check Status Code \u003cStatus Code\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User verify the Date of Rates \"Past\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User check response for \"Success\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Status Code"
      ]
    },
    {
      "cells": [
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Rates API for Past Date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@RateApi_PastDate"
    }
  ]
});
formatter.step({
  "name": "User Execute Get method for Rates Api for \"Past Date\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Steps.getRequest(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User check Status Code 200",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Steps.checkStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify the Date of Rates \"Past\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.verifyDate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User check response for \"Success\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.checkResponse(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Rates API for Latest Date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RateApi_LatestDate"
    }
  ]
});
formatter.step({
  "name": "User Execute Get method for Rates Api for \"Latest Date\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User check Status Code \u003cStatus Code\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User verify the Date of Rates \"Latest\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User check response for \"Success\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Status Code"
      ]
    },
    {
      "cells": [
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Rates API for Latest Date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@RateApi_LatestDate"
    }
  ]
});
formatter.step({
  "name": "User Execute Get method for Rates Api for \"Latest Date\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Steps.getRequest(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User check Status Code 200",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Steps.checkStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify the Date of Rates \"Latest\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.verifyDate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User check response for \"Success\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.checkResponse(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Rates API for Future Date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RateApi_FutureDate"
    }
  ]
});
formatter.step({
  "name": "User Execute Get method for Rates Api for \"Future Date\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User check Status Code \u003cStatus Code\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User verify the Date of Rates \"Future\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User check response for \"Success\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Status Code"
      ]
    },
    {
      "cells": [
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Rates API for Future Date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@RateApi_FutureDate"
    }
  ]
});
formatter.step({
  "name": "User Execute Get method for Rates Api for \"Future Date\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Steps.getRequest(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User check Status Code 200",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Steps.checkStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify the Date of Rates \"Future\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.verifyDate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User check response for \"Success\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.checkResponse(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Rates API for Incomplete Service Url",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RateApi_Incomplete"
    }
  ]
});
formatter.step({
  "name": "User Execute Get method for Rates Api for \"Incomplete Url\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User check Status Code \u003cStatus Code\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User check response for \"error\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Status Code"
      ]
    },
    {
      "cells": [
        "400"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Rates API for Incomplete Service Url",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@RateApi_Incomplete"
    }
  ]
});
formatter.step({
  "name": "User Execute Get method for Rates Api for \"Incomplete Url\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Steps.getRequest(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User check Status Code 400",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Steps.checkStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User check response for \"error\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.checkResponse(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});