var express = require("express");
var router = express.Router();
var contact = require("../db.json");
var fs = require("fs");
const { json } = require("express");
const { finished } = require("stream");
var data = fs.readFileSync(
  "/home/zmous/Desktop/React-Assignment/react-developer-assignment/Node-Express-Api/db.json"
);
var words = JSON.parse(data);
router.get("/", function (req, res, error) {
  res.json(contact);
});
router.post("/", function (req, res, next) {
  contact = contact.concat(req.body);
  var Word = words.concat(req.body);
  var Temp = JSON.stringify(Word, null, 2);
  console.log(Temp);
  fs.writeFile(
    "/home/zmous/Desktop/React-Assignment/react-developer-assignment/Node-Express-Api/db.json",
    Temp,
    finished
  );
  function finished(err) {
    console.log("all set");
  }
  res.end(JSON.stringify(req.body));
});
module.exports = router;
