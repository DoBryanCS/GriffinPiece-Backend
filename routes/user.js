const express = require('express');
const router = express.Router();
const request = require('../database/request');
const bcrypt = require('bcrypt');

router.get('/', async(req, res) => {
    try {
        const userId = req.infoUser.id
        const user = await request.getUser(userId);

        const response = {
            id: user.id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
        };

        res.json(response);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.put('/email', async(req, res) => {
    try {
        const userId = req.infoUser.id
        const { email } = req.body;

        const resultat = await request.getUser(userId)

        if (resultat.length != 0) {
            await request.modifyUserEmail(userId, email)
            return res.status(200).json({
                succes: true,
                message: 'L\'utilisateur a ete modifier!',
            });
        } else {
            res.send({ result: 'error' });
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
});

router.put('/password', async(req, res) => {
    try {
        const userId = req.infoUser.id
        const { password } = req.body;
        const passwordHash = await bcrypt.hash(password, 10);

        const resultat = await request.getUser(userId)

        if (resultat.length != 0) {
            await request.modifyUserPassword(userId, passwordHash)
            return res.status(200).json({
                succes: true,
                message: 'L\'utilisateur a ete modifier!',
            });
        } else {
            res.send({ result: 'error' });
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
});

module.exports = router;