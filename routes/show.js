const express = require('express');
const knex = require('knex');
const router = express.Router();

id = 0
router.get(`/show/${id}`, async (req, res) => {
    const show = () => knex('show')
    req = show().select().where('id', id)
    .then((show) => {
        return res.json(show);
    })
    .catch((err) => {
        console.error(err);
        return res.json({sucess: false, message : 'An error occurred'})
    })
})

router.get('/shows', async (req, res) => {
    const shows = () => knex('show')
    req = shows().select()
    .then((shows) => {
        return res.json(shows);
    })
    .catch((err) => {
        console.error(err);
        return res.json({sucess: false, message : 'An error occurred'})
    })
})