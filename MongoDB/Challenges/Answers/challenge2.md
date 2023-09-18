
# Challenge 2: Integrate Express.js with Node

## Solution

### Express Integration

1. Install Express.js by running:

```
npm install express
```

2. Modify `app.js` with the following code:

```javascript
const express = require('express');
const app = express();
```

### Route Creation

Add the following code in `app.js`:

```javascript
app.get('/api', (req, res) => {
    res.send('Hello from Express!');
});
```

### Server Activation

Add the following code at the end of `app.js`:

```javascript
app.listen(5000, () => {
    console.log('Express server is running on port 5000');
});
```

Run the application using:

```
node app.js
```

Open a web browser and navigate to `http://localhost:5000/api`.

