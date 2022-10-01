const knexModule = require('knex');
const loginKnex = require('./loginKnex');

const knex = knexModule(loginKnex);

// Requete de test
async function getUtilisateursAll() { return await knex('users'); };

async function trouverUtilisateur(email) { return await knex('users').where('email', email); }

module.exports = {
    getUtilisateursAll,
    trouverUtilisateur,
};
