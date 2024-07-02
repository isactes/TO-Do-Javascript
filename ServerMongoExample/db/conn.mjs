import { MongoClient } from "mongodb";

const connectionString = process.env.ISACTES_URI || '';

const isactesClient = new MongoClient(connectionString);

let conn;

try {
  conn = await isactesClient.connect();
  console.log("✨✨ Data Conected" )
} catch (error) {
  console.error("💀💀 Error connection ", error)
}

let db = conn.db("sample_training")

export default db