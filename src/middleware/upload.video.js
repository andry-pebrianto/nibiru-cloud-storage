const path = require("path");
const multer = require("multer");
const crypto = require("crypto");
const { failed } = require("../utils/createResponse");

// management file
const multerUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      try {
        // tempat menyimpan file video
        if (file.fieldname === "video") {
          cb(null, "./public/video");
        }
        // file jenis lain akan ditolak
        else {
          cb(
            { message: `The fieldname "video" not found.`, statusCode: 400 },
            false
          );
        }
      } catch (error) {
        error.statusCode = 500;
        cb(error, false);
      }
    },
    filename: (req, file, cb) => {
      try {
        // mengubah nama file yang akan disimpan (agar unique)
        const name = crypto.randomBytes(30).toString("hex");
        const ext = path.extname(file.originalname);
        const filename = `${name}${ext}`;
        cb(null, filename);
      } catch (error) {
        error.statusCode = 500;
        cb(error, false);
      }
    },
  }),
  fileFilter: (req, file, cb) => {
    try {
      // jika video
      if (file.fieldname === "video") {
        // filter mimetype video
        if (
          file.mimetype === "video/mp4" ||
          file.mimetype === "video/webm" ||
          file.mimetype === "video/x-msvideo" || // avi
          file.mimetype === "video/x-matroska" // mkv
        ) {
          cb(null, true);
        } else {
          cb(
            {
              message:
                "The accepted video extensions are only .mp4, .webm, .avi, and .mkv.",
              statusCode: 400,
            },
            false
          );
        }
      }
      // file jenis lain akan ditolak
      else {
        cb(
          { message: `The fieldname "video" not found.`, statusCode: 400 },
          false
        );
      }
    } catch (error) {
      error.statusCode = 500;
      cb(error, false);
    }
  },
  limits: { fileSize: 30000000 }, // max each file (only for video) = 30MB
});

// middleware
module.exports = (req, res, next) => {
  // file yang boleh diupload tiap request hanya 1
  const multerFields = multerUpload.fields([
    {
      name: "video",
      maxCount: 1,
    },
  ]);

  // pesan error jika melebihi 30MB
  multerFields(req, res, (err) => {
    if (err) {
      if (err.code === "LIMIT_FILE_SIZE") {
        err.message = `The uploaded file (${err.field}) is too large, exceeding the maximum limit of 30MB.`;
        err.statusCode = 400;
      }

      if (err.code === "LIMIT_UNEXPECTED_FILE") {
        err.message = `Unexpected field (${err.field}).`;
        err.statusCode = 400;
      }

      failed(res, {
        code: err.statusCode || 500,
        payload: err.message,
        message: "Upload File Error",
      });
    } else {
      next();
    }
  });
};
