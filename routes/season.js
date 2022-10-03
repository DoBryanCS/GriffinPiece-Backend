const express = require('express');
const app = express();
const request = require('../database/request');


id = 0

app.get(`/season/${id}`, async (req, res) => {
    try {
        const resultat = await request.getSeasons(id)

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