const express = require("express");
const uploadImage = require("../middleware/upload.image");
const uploadVideo = require("../middleware/upload.video");
const { uploadAWSImage } = require("../controller/upload.controller");

const router = express.Router();

router
  .post("/upload/aws/image", uploadImage, uploadAWSImage)
  .post("/upload/aws/video", uploadVideo, (req, res) => {
    res.json({
      message: "Berhasil Lolos",
    });
  });

module.exports = router;
