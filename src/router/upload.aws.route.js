const express = require("express");
const uploadImage = require("../middleware/upload.image");
const uploadVideo = require("../middleware/upload.video");
const {
  uploadAWSImage,
  uploadAWSVideo,
} = require("../controller/upload.aws.controller");

const router = express.Router();

router
  .post("/upload/aws/image", uploadImage, uploadAWSImage)
  .post("/upload/aws/video", uploadVideo, uploadAWSVideo);

module.exports = router;
