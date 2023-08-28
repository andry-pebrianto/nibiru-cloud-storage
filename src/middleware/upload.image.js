const path = require("path");
const multer = require("multer");
const crypto = require("crypto");
const { failed } = require("../utils/createResponse");

// management file
const multerUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      try {
        // tempat menyimpan file image
        if (file.fieldname === "image") {
          cb(null, "./image");
        }
        // file jenis lain akan ditolak
        else {
          cb(
            { message: `The fieldname "image" not found.`, statusCode: 400 },
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
      // jika image
      if (file.fieldname === "image") {
        // filter mimetype image
        if (
          file.mimetype === "image/png" ||
          file.mimetype === "image/jpg" ||
          file.mimetype === "image/jpeg" ||
          file.mimetype === "image/webp" ||
          file.mimetype === "image/gif"
        ) {
          cb(null, true);
        } else {
          cb(
            {
              message:
                "The accepted image extensions are only .jpg, .jpeg, .png, .webp, and .gif.",
              statusCode: 400,
            },
            false
          );
        }
      }
      // file jenis lain akan ditolak
      else {
        cb(
          { message: `The fieldname "image" not found.`, statusCode: 400 },
          false
        );
      }
    } catch (error) {
      error.statusCode = 500;
      cb(error, false);
    }
  },
  limits: { fileSize: 2000000 }, // max each file (only for image) = 2MB
});

// middleware
module.exports = (req, res, next) => {
  // file yang boleh diupload tiap request hanya 1
  const multerFields = multerUpload.fields([
    {
      name: "image",
      maxCount: 1,
    },
  ]);

  // pesan error jika melebihi 2MB
  multerFields(req, res, (err) => {
    if (err) {
      if (err.code === "LIMIT_FILE_SIZE") {
        err.message = `The uploaded file (${err.field}) is too large, exceeding the maximum limit of 2MB.`;
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
