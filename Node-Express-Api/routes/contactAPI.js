var express = require("express");
var router = express.Router();
var contact = require("../db.json");
var fs = require("fs");
var jsonFile = fs.readFileSync(
  "/home/zmous/Desktop/React-Assignment/react-developer-assignment/Node-Express-Api/db.json"
);
var jsonFileAfterParse = JSON.parse(jsonFile);
router.get("/", function (req, res, error) {
  res.json(contact);
});
router.post("/", function (req, res, next) {
  contact = contact.concat(req.body);
  var reqBody = req.body;
  reqBody.id = jsonFileAfterParse.length;
  var updatedFile = jsonFileAfterParse.concat(reqBody);
  var jsonUpdatedFile = JSON.stringify(updatedFile, null, 2);
  console.log(jsonUpdatedFile);
  fs.writeFile(
    "/home/zmous/Desktop/React-Assignment/react-developer-assignment/Node-Express-Api/db.json",
    jsonUpdatedFile,
    finished
  );
  function finished(err) {
    console.log("all set");
  }

  res.end(JSON.stringify(req.body));
});
module.exports = router;
