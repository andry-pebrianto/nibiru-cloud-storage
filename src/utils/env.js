require("dotenv").config();

module.exports = {
  APP_NAME: process.env.APP_NAME || "Example App",
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 5000,
  // aws
  AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
  // gcp
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  REDIRECT_URI: process.env.REDIRECT_URI,
  DRIVE_REFRESH_TOKEN: process.env.DRIVE_REFRESH_TOKEN,
  // cloudinary
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
};
