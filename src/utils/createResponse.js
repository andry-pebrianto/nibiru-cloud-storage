module.exports = {
  success: (res, data) => {
    const { code, payload, message } = data;

    const responseData = {
      code,
      status: "success",
      message,
      data: payload,
    };

    res.status(code).json(responseData);
  },
  failed: (res, data) => {
    const { code, payload, message } = data;

    const responseData = {
      code,
      status: "failed",
      message,
      error: payload,
    };

    res.status(code).json(responseData);
  },
};
