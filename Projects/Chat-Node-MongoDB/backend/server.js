const express = require("express");
const postRoutes = require("./routes/postRoutes");
const logger = require("./middleware/logger");
const cors = require("cors");
const { connectDB } = require("./database");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(logger);
app.use("/api", postRoutes);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error while starting the server", err);
  });
