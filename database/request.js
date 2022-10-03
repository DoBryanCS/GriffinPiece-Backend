const knexModule = require('knex');
const loginKnex = require('./loginKnex');

const knex = knexModule(loginKnex);

function getShowById(id) {
	return knex('shows').select().where('id', id);
}

function getShows() {
	return knex('shows').select();
}

function getSeasons(id) {
	return knex('seasons')
		.where('id', id).select();
}

function getEpisodes(id) {
	return knex('episodes').select().where('id', id)
}

function getComments(id) {
	return knex('comments').select().where('id', id)
}

function getHistory() {
	return knex('history').select()
}


module.exports = {
	getShowById,
	getShows,
    getSeasons,
	getEpisodes,
	getComments,
	getHistory,
};

