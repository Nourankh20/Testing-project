const mockInternshipsApiStub = require("./internships.api.stub.json");
const { getInternships } = require("../scrap");
// const { mongoClient } = require('../db.js');
const {MongoClient} = require('mongodb');

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
  jest.setTimeout(10000);

});

describe("Test Internships API", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.setTimeout(10000);
  
  });
  test("Test Get Internships", async () => {
    jest.setTimeout(10000);

    const results = await getInternships("Teralytics");
    expect(results).toEqual(mockInternshipsApiStub);
  });

});

describe("Testing data Aggregation",()=>{

  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  
  });
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect("mongodb+srv://solace:nmotkky@cluster0.nyepp.mongodb.net/test", {
      useNewUrlParser: true,
    });
    db = await connection.db("testing");
  });

  
  test('should insert a doc into collection', async () => {   
     jest.setTimeout(10000);

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
})