```javascript
const { MongoClient } = require('mongodb');

const uri = "<connection_string>";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const collection = client.db("databaseName").collection("collectionName");

    // Correct use of equality operator for single value
    const result = await collection.find({ field: "value" }).toArray();

    console.log(result);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```