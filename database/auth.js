const knexModule = require('knex');
const loginKnex = require('./loginKnex');

const knex = knexModule(loginKnex);

// Requete de test
async function getUtilisateursAll() { return await knex('users'); };

async function trouverUtilisateur(email) { return await knex('users').where('email', email).first(); }

async function ajouterUtilisateur(email, password, username) {
    return await knex('users').insert({ email, password, username, isAdmin:0 });
}

module.exports = {
    getUtilisateursAll,
    trouverUtilisateur,
    ajouterUtilisateur
};
