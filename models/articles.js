/**
 * Article model module.
 * @file 文章数据模型
 * @module model/articles
 */

const mongoose = require("../mongodb/mongodb");
const autoIncrement = require("mongoose-auto-increment");

// 文章模型
const articleSchema = new mongoose.Schema({
  // 文章标题
  title: { type: String, required: true, validate: /\S+/ },

  // 文章内容
  content: { type: String, required: true, validate: /\S+/ },

  // 文章类型 => 1: 原创，2: 转载，3: 其他
  type: { type: Number, default: 1 },

  // 文章发布状态 => 0 草稿，1 已发布
  state: { type: Number, default: 1 },

  // 文章标签
  tags: [{ type: String, ref: "Tag", required: true }],

  // 创建日期
  create_time: { type: Date, default: Date.now },

  // 最后修改日期
  update_time: { type: Date, default: Date.now }
});
// 自增 ID 插件配置
articleSchema.plugin(autoIncrement.plugin, {
  model: "Article",
  field: "id",
  startAt: 1,
  incrementBy: 1
});

// 文章模型
module.exports = mongoose.model("Article", articleSchema);
