require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const app = express();
const path = require("path");
const cors = require("cors");
const allowedOrigins = require("./config/allowedOrigins");

const cookieParser = require("cookie-parser");

const dbConfig = require("./config/dbConfig");
app.use(cors());
app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cartRoutes = require("./routes/cartRoutes");

app.use(cookieParser());

app.use("/cart", cartRoutes);

dbConfig();
app.listen(8000, () => {
  console.log(`Listening to the server on 8000 !!!`);
});
