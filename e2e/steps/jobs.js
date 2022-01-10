const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;
const axios = require("axios");

Given("a string {string}", function (companyName) {
	this.context["companyName"] = companyName;
});

When("I send a GET request to fetch jobs", async function () {
	const { data } = await axios.get(
		`http://localhost:3000/jobs?string=${this.context["companyName"]}`
	);

	this.context["response"] = data;
});

Then("I should get {} of jobs", function (expectedResponse) {
	assert.equal(this.context["response"][0], expectedResponse);
});
