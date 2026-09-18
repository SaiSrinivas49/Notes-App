const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const noteRoutes = require("./routes/noteRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/notes", noteRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});