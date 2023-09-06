const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const quizRoutes = require("./routes/quizRoutes");
dotenv.config(); // to be able to use .env data
const app = express();
app.use(cors()); // middle wear
app.use(express.json()); // new version of body parser
app.use("/api/users", userRoutes); // routes
app.use("/api/quizzes", quizRoutes); // routes
app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});
