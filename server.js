const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 6001;
const { connectDB } = require("./backend/config/db");

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

app.use("/api/users", require("./backend/routes/users"));
app.use("/api/posts", require("./backend/routes/posts"));

app.listen(PORT, (req, res) => console.log(`running on port ${PORT}`));
