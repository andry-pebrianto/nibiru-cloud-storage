const { google } = require("googleapis");
const fs = require("fs");
const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  REDIRECT_URI,
  DRIVE_REFRESH_TOKEN,
} = require("./env");

// oauth2 config
const oAuth2Client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: DRIVE_REFRESH_TOKEN });

const uploadGoogleDrive = async (file) => {
  try {
    const drive = google.drive({
      version: "v3",
      auth: oAuth2Client,
    });

    // upload to gd
    const response = await drive.files.create({
      requestBody: {
        name: file.filename,
        mimeType: file.mimetype,
        parents: ["11qAQcYJ2hIxnCVPwaePiq8GQbh2h6cKc"],
      },
      media: {
        mimeType: file.mimetype,
        body: fs.createReadStream(file.path),
      },
    });

    // set permission
    await drive.permissions.create({
      fileId: response.data.id,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });

    return `https://drive.google.com/uc?export=view&id=${response.data.id}`;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

module.exports = uploadGoogleDrive;
