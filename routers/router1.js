const express = require('express');
const axios = require('axios');

const helper = require('../utils/helper');
const {router} = require("express/lib/application");

// create router
const router1 = express.Router();

router1.get('/song', async (req, res) => {
    try {
        let url = helper.makeSongUrl(req.query.page, req.query.q, req.query.n);
        const response = await axios.get(url);
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
})


router1.get('/d', async (req, res) => {
    try {
        let url = helper.makeDirectSongUrl(req.query.id);
        const response = await axios.get(url);
        let downloadUrl = response.data.auth_url;
        if (downloadUrl) {
            res.send({'url':downloadUrl});
        } else {
            res.status(404).send('Song not found');
        }
    } catch (error) {
        return res.status(500).send('An error occurred');
    }
})


module.exports = router1;