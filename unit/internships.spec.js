const mockInternshipsApiStub = require("./internships.api.stub.json");
const { getInternships } = require("../scrap");

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});

describe("Test Internships API", () => {
  test("Test Get Internships", async () => {
    const results = await getInternships("Teralytics");
    expect(results).toEqual(mockInternshipsApiStub);
  });
});


