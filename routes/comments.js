const express = require('express');
const router = express.Router();
const request = require('../database/request');

// router.post(`/comment/${episodeId}`, async (req, res) => {
//     const addComment = () => knew('comments')
//     req = addComment().insert({userId: 'userId'}, {episodeId: episodeId}, {comment : ''})
// })

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const resultat = await request.getComments(id)

        if(resultat.length!=0)
		{   
			res.send(resultat);
		} else {
			res.send({result : 'error'});
		}
	} catch (error) {
		res.status(500).json(error.message);
	}
});

module.exports = router;