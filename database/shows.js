const knexModule = require('knex');
const loginKnex = require('./loginKnex');

const knex = knexModule(loginKnex);

function getSeasons(id) {
	return knex('seasons')
		.where('id', id).select();
}

module.exports = {
    getSeasons,
};

