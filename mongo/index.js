const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://waiyanhtet1661390:wyh1661390@cluster0.xry9pnl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function setUpDatatbase() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const db = await client.db("sample_mflix");
    return {
      client,
      db,
      movies: db.collection("movies"),
      users: db.collection("users"),
    };
  } catch (err) {
    console.log("Error to connecting Databases");
  }
}

module.exports = { setUpDatatbase };
