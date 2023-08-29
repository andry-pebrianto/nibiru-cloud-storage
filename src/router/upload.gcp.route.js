const express = require("express");
const uploadImage = require("../middleware/upload.image");
const uploadVideo = require("../middleware/upload.video");
const {
  uploadGCPImage,
  uploadGCPVideo,
} = require("../controller/upload.gcp.controller");

const router = express.Router();

router
  .post("/upload/gcp/image", uploadImage, uploadGCPImage)
  .post("/upload/gcp/video", uploadVideo, uploadGCPVideo);

module.exports = router;
