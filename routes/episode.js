const express = require('express');
const knex = require('../database/auth');

const router = express.Router();

router.get(`/episode/${id}`, async (req, res) => {
    const episode = () => knex('episodes')
    req = episode().select().where('id', id)
    .then((episode) => {
        return res.json(episode);
    })
    .catch((err) => {
        console.error(err);
        return res.json({sucess: false, message : 'An error occurred'})
    })
})