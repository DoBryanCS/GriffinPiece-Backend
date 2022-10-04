const knexModule = require('knex');
const loginKnex = require('./loginKnex');
const knex = knexModule(loginKnex);


// SHOWS
function getShowById(id) {
	return knex('shows').where('id', id).first();
}

function getShows() {
	return knex('shows');
}

// SEASONS
function getSeasons(showId) {
	return knex('seasons').where('showId', showId);
}

function getSeason(id) {
	return knex('seasons').where('id', id).first();
}

// EPISODES
function getEpisodes(seasonId) {
	return knex('episodes')
	.where('seasonId', seasonId)
	.join('seasons', 'episodes.seasonId', '=', 'seasons.id')
	.select('episodes.id', 'seasons.showId', 'episodes.title', 'episodeNumber', 'length', 'episodes.imageUrl');
}

function getEpisode(id) {
	return knex('episodes').where('episodes.id', id)
	.join('seasons', 'episodes.seasonId', '=', 'seasons.id')
	.select('episodes.id', 'episodes.seasonId', 'seasons.showId', 'episodes.title', 'episodeNumber', 'length', 'episodes.imageUrl', 'episodes.videoUrl')
	.first();
}

// COMMENTS
function getComments(id) {
	return knex('comments').where('episodeId', id);
}

// HISTORY
function getHistory(userId) {
	return knex('history').where("userId", userId);
}

async function insertToHistory(userId, episodeId, date) {
	await knex('history').insert({
		userId: userId,
		episodeId: episodeId,
		date: date
	})
}

// USER

function getUser(id) {
	return knex('users').where('id', id).first();
}

async function modifyUserEmail(id, newEmail) {
	return await knex('users')
	.where('id', id)
	.update({email : newEmail})
}

module.exports = {
	getShowById,
	getShows,
	getSeason,
    getSeasons,
	getEpisode,
	getEpisodes,
	getComments,
	getHistory,
	insertToHistory,
	getUser,
	modifyUserEmail
};

