const mockCompaniesApiStub = require("./companies.api.stub.json");
const { getCompJobs} = require("../../scrap1.js");
const {getJobType }=require("../../scrap1")
const mockJobsApiStub = require("./jobsType.api.stub.json");

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});

describe("Test Companies API", () => {
  test("Test Get Companies", async () => {
    const results = await getCompJobs("6th of October, Giza, Egypt ");
    expect(results).toEqual(mockCompaniesApiStub);
  });

});


describe("Test jobs  API", () => {
  test("Test Get job ", async () => {
    const results = await getJobType("Intern");

    expect(results).toEqual(mockJobsApiStub);
  });

});


