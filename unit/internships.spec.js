const mockInternshipsApiStub = require("./internships.api.stub.json");
const { getInternships } = require("../scrap");

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});

describe("Test Internships API", () => {
  test("Test Get Internships", async () => {
    const results = await getInternships("Google");
    expect(results).toEqual(mockInternshipsApiStub);
  });
});