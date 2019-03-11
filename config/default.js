"use strict";

module.exports = {
  port: 8020,
  mongodb: "mongodb://localhost:27017/blog",
  session: {
    name: "blog",
    secret: "blog",
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 365 * 24 * 60 * 60 * 1000
    }
  }
};
