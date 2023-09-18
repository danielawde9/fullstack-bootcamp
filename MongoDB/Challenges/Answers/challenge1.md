# Challenge 1: Create a Basic Node.js Application

## Solution

### Project Initialization

1. Open your terminal.
2. Navigate to the directory where you want to create your project.
3. Run the following command:

```csharp
npm init -y
```

This will create a package.json file in the directory.

### Simple Program Creation

1. Create a file named `app.js`.
2. Add the following code to `app.js`:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello, World!');
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});
```

### Program Execution

Run the following command in your terminal:

```
node app.js
```