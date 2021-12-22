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

app.get("/getAllPlayers", (req, res) => {
  all_fighter_data = [];
  ufc_fighter_file_path =
    __dirname.split("/backend")[0] +
    "/scraping/ufc_fighters/all_fighters_det.csv";
  fs.createReadStream(ufc_fighter_file_path)
    .pipe(csv.parse({ headers: true }))
    .on("error", (error) => {
      console.error(error);
    })
    .on("data", (row) => {
      all_fighter_data.push(row);
    })
    .on("end", (rowCount) => {
      res.json({ status: true, all_fighter_data, total: rowCount });
    });
});

const PORT = process.env.PORT || 5000;

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
