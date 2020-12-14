let express = require("express");
let router = express.Router();
const NamesController = require("./../controllers/namesController");
let NamesInstance = new NamesController();

/* GET home page. */
router.get("/", function (req, res, next) {
  NamesInstance.getUser(req, res);
});

router.post("/add", function (req, res, next) {
  NamesInstance.postUser(req, res);
});

router.put("/modify", function (req, res) {
  NamesInstance.putUser(req, res);
});

router.delete("/delete/:indice", (req, res) => {
  NamesInstance.deleteUser(req, res);
});

module.exports = router;
