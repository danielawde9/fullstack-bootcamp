const databaseName = "test";
const collectionName = "test-collection";

exports.createPosts = async (req, res) => {
  const newDocuments = req.body;
  const collection = client.db(databaseName).collection(collectionName);
  try {
    const result = await collection.insertMany(newDocuments);
    res.send(result);
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.readMultiplePosts = async (req, res) => {
  const namesArray = req.body.names;
  const collection = client.db(databaseName).collection(collectionName);
  try {
    const result = await collection
      .find({ name: { $in: namesArray } })
      .toArray();
    res.send(result);
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.updateMultiplePosts = async (req, res) => {
  const updatesArray = req.body.updates;
  const collection = client.db(databaseName).collection(collectionName);
  try {
    const results = await Promise.all(
      updatesArray.map(async (update) => {
        return await collection.updateOne(update.filter, { $set: update.data });
      })
    );
    res.send(results);
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.deleteMultiplePosts = async (req, res) => {
  const namesArray = req.body.names;
  const collection = client.db(databaseName).collection(collectionName);
  try {
    const result = await collection.deleteMany({ name: { $in: namesArray } });
    res.send(result);
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("Internal Server Error");
  }
};
