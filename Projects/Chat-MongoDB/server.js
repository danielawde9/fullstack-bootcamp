const express = require("express");
const postRoutes = require("./routes/postRoutes");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 3000;

const uri = 
"mongodb+srv://danielawde9:CQ1ZoaPQAHrn3GDo@cluster0.x0d4wbq.mongodb.net/";

global.client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client
  .connect()
  .then(() => {
    console.log("Connected to MongoDB!");

    app.use(express.json()); // for parsing application/json
    app.use("/api", postRoutes); // Use the routes

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
