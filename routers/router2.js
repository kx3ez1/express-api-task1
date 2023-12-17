const express = require("express");
const axios = require("axios");

const helper = require("../utils/helper");
const { router } = require("express/lib/application");
const { requestTrendingData } = require("../utils/serverRequests");
const { getNewReleasesAlbumsData } = require("../utils/serverRequests");

// create router
const router2 = express.Router();

// album details by id
router2.get("/album", async (req, res) => {
  try {
    let url = helper.makeAlbumDetailUrl(req.query.id);
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send("An error occurred");
  }
});

// albums search.topAlbumsoftheYear
router2.get("/album/topAlbumsoftheYear", async (req, res) => {
  try {
    let url = helper.makeAlbumListOfTheYearUrl(
      req.query.language,
      req.query.year
    );
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send("An error occurred");
  }
});

// playlist details by id
router2.get("/playlist", async (req, res) => {
  try {
    let url = helper.makePlayListDetailUrl1(req.query.id);
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send("An error occurred");
  }
});

// artist details by id
router2.get("/artist", async (req, res) => {
  try {
    let url = helper.makeArtistListUrl(
      req.query.id,
      req.query.page,
      req.query.nSongs,
      req.query.nAlbums
    );
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send("An error occurred");
  }
});

// get trending data by lang
router2.get("/trending", async (req, res) => {
  try {
    let data = await requestTrendingData(req.query.language);
    res.send(data);
  } catch (error) {
    res.status(500).send("An error occurred");
  }
});

// get new releases albums data by lang
router2.get("/new/albums", async (req, res) => {
  try {
    let data = await getNewReleasesAlbumsData(req.query.language);
    res.send(data);
  } catch (error) {
    res.status(500).send("An error occurred");
  }
});


module.exports = router2;
