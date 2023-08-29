const express = require("express");
const uploadImage = require("../middleware/upload.image");
const uploadVideo = require("../middleware/upload.video");
const {
  uploadCloudinaryImage,
  uploadCloudinaryVideo,
} = require("../controller/upload.cloudinary.controller");

const router = express.Router();

router
  .post("/upload/cloudinary/image", uploadImage, uploadCloudinaryImage)
  .post("/upload/cloudinary/video", uploadVideo, uploadCloudinaryVideo);

module.exports = router;
