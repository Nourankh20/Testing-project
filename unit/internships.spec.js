const mockInternshipsApiStub = require("./internships.api.stub.json");
const { getInternships } = require("../scrap");
const { mongoClient } = require('../db.js');
const {MongoClient} = require('mongodb');

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});

describe("Test Internships API", () => {

  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect("mongodb+srv://solace:nmotkky@cluster0.nyepp.mongodb.net/test", {
      useNewUrlParser: true,
    });
    db = await connection.db("testing");
  });

  
  test('should insert a doc into collection', async () => {
    const glassdoor = db.collection('glassdoor');

    const mockInternship =  await getInternships("Teralytics");
    await glassdoor.insertOne({companyName:mockInternship});

    const insertedIntrenship = await glassdoor.findOne({companyName:"Teralytics Logo"});
    expect(insertedIntrenship.companyName).toEqual(mockInternship);
  });
  
  afterAll(async () => {
    await connection.close();
    // await db.close();
  });

  test("Test Get Internships", async () => {
    const results = await getInternships("Teralytics");
    expect(results).toEqual(mockInternshipsApiStub);
  });

  // test("Test data aggregate get method", async () => {
  //   const connectSpy = jest.spyOn(mongoClient, 'connect').mockReturnValueOnce({});
  //     const actual = await Common.connect('mongodb://localhost:27017');
  //     expect(actual).toEqual({});
  //     expect(connectSpy).toBeCalledWith('mongodb://localhost:27017', {
  //       useNewUrlParser: true,
  //       useUnifiedTopology: true 
  // });
// });

});
