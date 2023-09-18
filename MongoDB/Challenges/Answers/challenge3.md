# Challenge 3: Connecting Node.js and Express.js to MongoDB

## Solution

### Database Creation

1. Visit mongodb.com and create an account.
2. Navigate to the cluster creation section.
3. Choose the free version and select Amazon Bahrain (or another desired region).
4. Proceed with the setup.

### Database Initialize

1. Once the cluster is created, create a new database user with a simple username and password (avoiding symbols and numbers).
2. Whitelist your IP to grant access.

### Database Connection

1. Install the MongoDB Node.js driver by running:

```
npm install mongodb
```

2. Add the following code to `app.js` to initiate the connection (replace `<USERNAME>`, `<PASSWORD>`, and `<DB_NAME>` accordingly):

```javascript

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://danielawde9:<password>@cluster0.a3tsnya.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

```

### Error Handling

Modify the `client.connect()` method as follows to handle connection errors:

```javascript

  catch (error) {
    console.error("There was an error connecting to MongoDB:", error);
  }

```


creating the server with mongo db 

```js
const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const app = express();

const uri = "mongodb+srv://danielawde9:Admin123@cluster0.wb8hiwa.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToMongo() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("There was an error connecting to MongoDB:", error);
    process.exit(1);
  }
}

connectToMongo().catch(console.dir);

const PORT = 6000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

```