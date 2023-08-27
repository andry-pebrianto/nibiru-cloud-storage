const express = require("express");
const upload = require("../middleware/upload");
const photoLimit = require("../middleware/photoLimit");

const router = express.Router();

router.post("/upload/aws", upload, photoLimit, (req, res) => {
  res.json({
    message: "Berhasil Lolos",
  });
});

module.exports = router;
