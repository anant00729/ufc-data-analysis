const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");

const fs = require("fs");
const path = require("path");
const csv = require("fast-csv");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public/build"));
app.use(express.static("public"));

app.get("/test", (req, res) => {
  fs.createReadStream(path.resolve(__dirname, "assets", "parse.csv"))
    .pipe(csv.parse({ headers: true }))
    .on("error", (error) => console.error(error))
    .on("data", (row) => console.log(row))
    .on("end", (rowCount) => console.log(`Parsed ${rowCount} rows`));
});

const PORT = process.env.PORT || 5000;

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
