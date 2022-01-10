const mockJobsApiStub = require("./jobs.api.stub.json");
const {
  getJobs
} = require("../../scrapNew");


beforeEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});

describe("Test Jobs API", () => {
  test("Test Get Jobs", async () => {
    const results = await getJobs("Software Engineering Services");
    expect(results).toEqual(mockJobsApiStub);
  });

});