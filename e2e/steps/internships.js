const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;
const axios = require("axios");

Given("a string {}", function (companyName) {
  this.context["companyName"] = companyName;
});

When("I send a GET request to fetch internships", async function () {
  const {data} = await axios
    .get(`http://localhost:3000/internships?char=${this.context["companyName"]}`)
this.context["response"] = data
});

Then("I should get {int} of internships", function (expectedResponse) {
  assert.equal(this.context["response"].length, expectedResponse);
});