const express = require('express');
const router = express.Router();
const request = require('../database/request');


router.get('/', async (req, res) => {
    try {
        const resultat = await request.getHistory()

        if(resultat.length!=0)
		{   
			console.log(resultat);
			res.send(resultat);
		} else {
			res.send({result : 'error'});
		}
	} catch (error) {
		res.status(500).json(error.message);
	}
});

module.exports = router;