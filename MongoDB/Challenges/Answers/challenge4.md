# Challenge 4: Implement Create Operation with MongoDB

## Solution

### Data Modeling

Decide on a structure for user data, e.g., `{ name: String, email: String, age: Number }`.

### API Route for Creation

In `app.js`, after setting up the MongoDB connection, add an endpoint to create a user:

```javascript
app.use(express.json());

app.post("/api/users", (req, res) => {
  const user = { name: "John Doe", email: "john.doe@example.com", age: 25 };
  const collection = client.db("dbTest").collection("users");
  collection.insertOne(user);
  res.status(200).send("User added successfully.");

  // else error
});
```
