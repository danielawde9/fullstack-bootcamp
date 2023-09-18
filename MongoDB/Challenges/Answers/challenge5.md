# Challenge 5: Implement Read Operations with MongoDB

## Solution

### Fetch All Data

Add the following endpoint in `app.js` to retrieve all users:

```javascript
app.get('/api/users', (req, res) => {
    const collection = client.db("<DB_NAME>").collection("users");
    collection.find({}).toArray((err, users) => {
        if (err) {
            res.status(500).send('Failed to fetch users.');
            return;
        }
        res.status(200).json(users);
    });
});
```

### Fetch Specific Data

Add an endpoint to fetch a user by their ID (assuming ObjectId is used as the identifier):

```javascript
const ObjectId = require('mongodb').ObjectId;

app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    const collection = client.db("<DB_NAME>").collection("users");
    collection.findOne({ _id: ObjectId(userId) }, (err, user) => {
        if (err) {
            res.status(500).send('Failed to fetch user.');
            return;
        }
        if (!user) {
            res.status(404).send('User not found.');
            return;
        }
        res.status(200).json(user);
    });
});
```


```js 


const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const app = express();

const uri = "mongodb+srv://danielawde9:kdOx2m3DdUcVk8Ri@cluster0.wb8hiwa.mongodb.net/?retryWrites=true&w=majority";

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

app.use(express.json());
app.post('/api/users', (req, res) => {
    const user = { name: 'John Doe', email: 'john.doe@example.com', age: 25 };
    const collection = client.db("dbTest").collection("users");  
    collection.insertOne(user, (err, result) => {
        if (err) {
            res.status(500).send('Failed to insert user.');
            return;
        }
        res.status(200).send('User added successfully.');
    });
});

app.get('/api/users', (req, res) => {
    const collection = client.db("dbTest").collection("users");
    collection.find({}).toArray((err, users) => {
        if (err) {
            res.status(500).send('Failed to fetch users.');
            return;
        }
        res.status(200).json(users);
    });
});

const ObjectId = require('mongodb').ObjectId;

app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    const collection = client.db("dbTest").collection("users");
    collection.findOne({ _id: ObjectId(userId) }, (err, user) => {
        if (err) {
            res.status(500).send('Failed to fetch user.');
            return;
        }
        if (!user) {
            res.status(404).send('User not found.');
            return;
        }
        res.status(200).json(user);
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

```