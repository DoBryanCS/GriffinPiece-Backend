const express = require('express');
const knex = require('../database/auth');

const router = express.Router();

router.post(`/comment/${episodeId}`, async (req, res) => {
    const addComment = () => knew('comments')
    req = addComment().insert({userId: 'userId'}, {episodeId: episodeId}, {comment : ''})
})

router.get(`/comment/${episodeId}`, async (req, res) => {
    const comment = () => knex('comments')
    req = comment().select().where('episodeId', episodeId)
    .then((comment) => {
        return res.json(comment);
    })
    .catch((err) => {
        console.error(err);
        return res.json({sucess: false, message : 'An error occurred'})
    })
})
