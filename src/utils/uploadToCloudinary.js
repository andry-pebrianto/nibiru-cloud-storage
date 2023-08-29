const { v2: cloudinary } = require("cloudinary");
const {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} = require("./env");

module.exports = (file) => {
  cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
  });

  console.log(file);

  return new Promise((resolve, reject) => {
    const opt = { folder: "nibiru-cloud-storage" };

    // jika file yg diuplaod adalah video
    if (file.fieldname === "video") opt.resource_type = "video";

    cloudinary.uploader.upload(file.path, opt, function (error, result) {
      if (error) {
        return reject(error);
      }
      return resolve(result.secure_url);
    });
  });
};
