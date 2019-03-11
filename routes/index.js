const articles = require("./articles");

module.exports = app => {
  app.use("/articles", articles);
};
