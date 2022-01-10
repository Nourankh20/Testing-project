const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;
const axios = require("axios");

Given("a string {string}", function (jobType) {
    this.context["jobType"] = jobType;
    console.log(jobType)
  });
  
  When("I send a GET request to fetch jobsType",  {timeout: 10 * 5000}, async function () {
    const {data} = await axios
      .get(`http://localhost:3000/jobsType?string=${this.context["jobType"]}`)
      this.context["response"] = data
      console.log(data)
  
  });
  
  Then("I should get {int} of jobsType", function (expectedResponse) {
    assert.deepEqual(this.context["response"].length, expectedResponse);
  });