module.exports = {
  responseClient({
    res,
    httpCode = 200,
    code = 200,
    message = "ok",
    data = {}
  }) {
    let responseData = {};
    responseData.code = code;
    responseData.message = message;
    responseData.data = data;
    res.status(httpCode).json(responseData);
  }
};
