const consola = require("consola");
const config = require("config-lite")(__dirname);
const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
// remove DeprecationWarning
mongoose.set("useFindAndModify", false);

// mongoose Promise
mongoose.Promise = global.Promise;

// mongoose

// connect
// 连接数据库
mongoose.connect(config.mongodb);

// 连接错误
mongoose.connection.on("error", error => {
  consola.warn("数据库连接失败!", error);
  mongoose.connect(
    config.mongodb,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      promiseLibrary: global.Promise
    }
  );
});

// 连接成功
mongoose.connection.once("open", () => {
  consola.ready("数据库连接成功!");
});

// 自增 ID 初始化
autoIncrement.initialize(mongoose.connection);

module.exports = mongoose;
