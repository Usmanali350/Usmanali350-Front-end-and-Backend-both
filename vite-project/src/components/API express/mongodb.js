const { MongoClient } = require('mongodb');

const dburl = 'mongodb://localhost:27017';
const database = 'UsmanData';
let client;
let dbInstance;

async function dbConnection() {
  if (!dbInstance) { // Check if dbInstance is null or undefined
    try {
      client = new MongoClient(dburl, { useUnifiedTopology: true });
      await client.connect();
      dbInstance = client.db(database);
      console.log("Connected to MongoDB"); // This will now execute
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
      throw err;
    }
  }
  return dbInstance;
}

module.exports = { dbConnection };
