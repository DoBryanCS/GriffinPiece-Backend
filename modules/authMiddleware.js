const jwt = require('jsonwebtoken');
const knex = require('../database/utilisateurs');
require('dotenv').config();

function authMiddleware(req, res, next) {
    const authHeaders = req.headers.authorization;
    const token = authHeaders && authHeaders.split(' ')[1];
    req.newToken = null;
    const changeAfter = 7 * 60 * 1000;

    if (token == null) return res.status(401).json({ succes: false, message: 'Le token est null'});

    jwt.verify(token, process.env.SECRET_KEY, (error, infoUser) => {
        if (error) return res.status(403).json({ succes: false, message: 'Le token pris en compte n\'est pas valide' });

        if ((infoUser.exp * 1000) - Date.now() < changeAfter) {
            req.newToken = jwt.sign(
                {
                    Identifiant: infoUser.Identifiant,
                    Nom: infoUser.NomFamille,
                    Etudiant: infoUser.Etudiant,
                },
                process.env.SECRET_KEY,
                { expiresIn: '15m' },
            );
        }

        req.infoUser = infoUser;

        knex.trouverUtilisateur(infoUser.Identifiant)
            .then((result) => {
                if (result.length === 0) return res.status(401).json({ succes: false, message: 'L\'utilisateur n\'existe pas' });
            });

        next();
    });
}

module.exports = authMiddleware;
