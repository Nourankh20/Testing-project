const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;
const axios = require("axios");

Given("a String {}", function (companyName) {
  this.context["companyName"] = companyName;
});

When("I send a GET request to fetch internships", async function () {
  const {data} = await axios
    .get(`http://127.0.0.1::3000/internships?string=${this.context["companyName"]}`)
this.context["response"] = data
});

Then("I should get {int} of internships", function (expectedResponse) {
  console.log("you can't see me"+this.context["response"].length);
  console.log("my time is now"+expectedResponse);

  assert.equal(this.context["response"].length, expectedResponse);
});