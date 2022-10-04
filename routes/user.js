const express = require('express');
const router = express.Router();
const request = require('../database/request');


router.put('/', async (req, res) => {
    try {
        const userId = req.infoUser.id
        const { email } = req.body;

        const resultat = await request.getUser(userId)

        if(resultat.length!=0)
		{   
            await request.modifyUserEmail(userId, email)
			return res.status(200).json({ 
                succes: true, 
                message: 'L\'utilisateur a ete modifier!', 
            });
		} else {
			res.send({result : 'error'});
		}
	} catch (error) {
		res.status(500).json(error.message);
	}
});

module.exports = router;