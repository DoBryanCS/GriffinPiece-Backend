// CECI EST UN FICHIER DE TEST

const knexModule = require('knex');

// connect to sqlite db
const knex = knexModule({
    client: 'sqlite3',
    connection: {
        filename: `${__dirname}/db.sqlite3`
    },
    useNullAsDefault: true
});

// knex('shows').then((rows) => {
//     console.log(rows);
// });


async function naruto() {
    const fetch = require('node-fetch');

    let url = 'https://gogoanime.herokuapp.com/anime-details/naruto';

    let options = {method: 'GET'};

    fetch(url, options)
    .then(res => res.json())
    .then(async json => {
        // show
        let title = json.animeTitle;
        let description = json.synopsis;
        let imageUrl = json.animeImg;
        let releaseDate = json.releasedDate;
        let genre = json.genres[0];
        let rating = 0;
        // console.log(title, description, imageUrl, releaseDate, genre, rating);
        await knex('shows').insert({
            title: title,
            description: description,
            imageUrl: imageUrl,
            releaseDate: releaseDate,
            genre: genre,
            rating: rating
        }).then(function(id) {
            console.log('inserted : ' + id);

            // seasons
            let showId = id;
            
        });

        
    })
    .catch(err => console.error('error:' + err));
}

naruto();


let text = `"Enter: Naruto Uzumaki!" Transcription: "Sanjō! Uzumaki Naruto!" (Japanese: 参上!うずまきナルト)`

let regex = /"(.*?)"/;
let match = text.match(regex);
let result = match[1];


// async function ajouterUtilisateur(Identifiant, MotDePasse, Identifiant) {
//     await knex('users').insert({
//         username: Identifiant,
//         password: MotDePasse,
//         email : Identifiant,
//         isAdmin : 0
//     });
// }

// ajouterUtilisateur('test', 'test', 'test');

// // retourne les utilisateurs depuis un identifiant
// async function trouverUtilisateur(Identifiant) {
//     return await knex('Utilisateurs')
//         .where('Identifiant', Identifiant);
// }
