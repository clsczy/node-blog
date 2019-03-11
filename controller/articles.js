const Article = require("../models/articles");
const { responseClient } = require("../utils/utils");

class Articles {
  constructor() {
    this.addArticle = this.addArticle.bind(this);
  }
  //添加商铺
  async addArticle(req, res, next) {
    const { title, content, type, state, tags } = req.body;
    const tempArticle = new Article({
      title,
      content,
      type,
      state,
      tags
    });
    tempArticle
      .save()
      .then(data => {
        console.log(data);

        responseClient({ res, data, message: "添加成功" });
      })
      .catch(err => {
        console.log(err);
        responseClient({ res, data: err });
      });
  }
}
module.exports = new Articles();
