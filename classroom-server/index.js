//initialization start++++++++++++++++++++++++++++++++++++
const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
//initialization end______________________________________

//middleware start++++++++++++++++++++++++++++++++++++++++
app.use((req, res, next) => {
  console.log(
    `REQ -->> ${req.method} -> ${
      req.url
    } at ${new Date().toLocaleTimeString()} `
  );
  next();
});
//middleware end__________________________________________

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("successfully connected to MongoDB!");

    const db = client.db("classroomDB");
    const studentCollection = db.collection("students");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`SERVER-RUNNING\nPORT - ${port}`);
});
