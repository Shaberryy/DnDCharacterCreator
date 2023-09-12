const express = require("express");
const router = express.Router();

const { getAllRaces } = require("../db/helpers/races");

router.get("/", async (req, res, next) => {
  try {
    const races = await getAllRaces();
    res.send(races);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
