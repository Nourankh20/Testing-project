const mockInternshipsApiStub = require("./internships.api.stub.json");
const { getInternships } = require("../scrap");
const { mongoClient } = require('../db.js');

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});

describe("Test Internships API", () => {
  test("Test Get Internships", async () => {
    const results = await getInternships("Teralytics");
    expect(results).toEqual(mockInternshipsApiStub);
  });

  test("Test data aggregate get method", async () => {
    const connectSpy = jest.spyOn(mongoClient, 'connect').mockReturnValueOnce({});
      const actual = await Common.connect('mongodb://localhost:27017');
      expect(actual).toEqual({});
      expect(connectSpy).toBeCalledWith('mongodb://localhost:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      
  });
}
);

});
