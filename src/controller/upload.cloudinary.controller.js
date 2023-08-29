const { success, failed } = require("../utils/createResponse");
const uploadToCloudinary = require("../utils/uploadToCloudinary");
const deleteFile = require("../utils/deleteFile");

module.exports = {
  uploadCloudinaryImage: async (req, res) => {
    try {
      let image = null;

      if (req.files) {
        // upload image
        if (req.files.image) {
          image = await uploadToCloudinary(req.files.image[0]);
          deleteFile(req.files.image[0].path);
        } else {
          failed(res, {
            code: 400,
            payload: `The fieldname "image" does not have a file object.`,
            message: "Upload Failed",
          });
          return;
        }
      } else {
        failed(res, {
          code: 400,
          payload: `The fieldname "image" not found.`,
          message: "Upload Failed",
        });
        return;
      }

      success(res, {
        code: 200,
        payload: {
          image,
        },
        message: "Upload Success",
      });
    } catch (error) {
      failed(res, {
        code: 500,
        payload: error.message,
        message: "Internal Server Error",
      });
    }
  },
  uploadCloudinaryVideo: async (req, res) => {
    try {
      let video = null;

      if (req.files) {
        // upload video
        if (req.files.video) {
          video = await uploadToCloudinary(req.files.video[0]);
          deleteFile(req.files.video[0].path);
        } else {
          failed(res, {
            code: 400,
            payload: `The fieldname "video" does not have a file object.`,
            message: "Upload Failed",
          });
          return;
        }
      } else {
        failed(res, {
          code: 400,
          payload: `The fieldname "video" not found.`,
          message: "Upload Failed",
        });
        return;
      }

      success(res, {
        code: 200,
        payload: {
          video,
        },
        message: "Upload Success",
      });
    } catch (error) {
      failed(res, {
        code: 500,
        payload: error.message,
        message: "Internal Server Error",
      });
    }
  },
};
