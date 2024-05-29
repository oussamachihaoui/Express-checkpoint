const express = require("express");
const dotenv = require("dotenv");
const appRoutes = require("./routes/route");
const path = require("path");
const { openTime } = require("./middlewares/openTime");

const app = express();
dotenv.config();

app.use(openTime);

app.use(appRoutes);

app.get("/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "style.css"));
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(3000, () => {
  console.log(`server is running on ${PORT}`);
});
