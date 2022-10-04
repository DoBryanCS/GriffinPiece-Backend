const express = require('express');
const bcrypt = require('bcrypt');
const generateToken = require('../modules/token');
const knex = require('../database/auth');

const router = express.Router();

router.post('/login', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

    try {
        const { email, password } = req.body;

        const user = await knex.trouverUtilisateur(email);

        if (user.length === 0) {
            return res.status(401).json({ succes: false, message: 'L\'utilisateur n\'existe pas' });
        }

        // TODO ENCRYPTER LE MOT DE PASSE
        // const passwordCorrect = await bcrypt.compare(password, user[0].password);
        const passwordCorrect = password === user.password;

        if (!passwordCorrect) {
            return res.status(401).json({ succes: false, message: 'Le mot de passe est incorrect' });
        }

        const AUTH_TOKEN = generateToken.generateToken('1d', {
            id: user.id,
            username: user.username,
            isAdmin: user.isAdmin,
        });

        return res.status(200).json({ 
            succes: true, 
            message: 'L\'utilisateur est connecté', 
            token: AUTH_TOKEN, 
            username: user.username
        });
    }
    catch (error) {
        res.status(500).json({ succes: false, message: error.message });
    }
});

router.post('/register', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

    try {
        const { email, password, username } = req.body;

        const user = await knex.trouverUtilisateur(email);
        if (user != undefined) {
            return res.status(409).json({ succes: false, message: 'L\'utilisateur existe deja' });
        }

        // TODO ENCRYPTER LE MOT DE PASSE
        // const passwordCorrect = await bcrypt.compare(password, user[0].password);
        // const passwordCorrect = password === user[0].password;
        
        const newPassword = password;        


        await knex.ajouterUtilisateur(email, newPassword, username);

        return res.status(200).json({ 
            succes: true, 
            message: 'L\'utilisateur est créé', 
            email: email
        });
    }
    catch (error) {
        res.status(500).json({ succes: false, message: error.message });
    }
});

module.exports = router;