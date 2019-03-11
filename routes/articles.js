"use strict";

const express = require("express");
const router = express.Router();
const { addArticle } = require("../controller/articles");

router.post("/addArticle", addArticle);

module.exports = router;
