const express = require("express");
const router = express.Router();
const SauceRouter = require("./songs.router");
const API_SONGS = `/songs`;

router.use(API_SONGS, SauceRouter);

module.exports = router;
