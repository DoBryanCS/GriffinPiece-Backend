const express = require('express');

const apiJSON = require('./Documentation/swagger');
const swaggerUi = require('swagger-ui-express');

const app = express();
const cors = require('cors');


const PORT = process.env.PORT || 3000;

const authRouteur = require('./routes/auth');
const showRouteur = require('./routes/show');
const seasonsRouteur = require('./routes/seasons');
const seasonRouteur = require('./routes/season')
const episodeRouteur = require('./routes/episode');
const episodesRouteur = require('./routes/episodes');
const historyRouteur = require('./routes/history');
const commentsRouteur = require('./routes/comments');


app.use(cors());
app.use(express.json());

app.use('/auth', authRouteur);
app.use('/show', showRouteur);
app.use('/season', seasonRouteur);
app.use('/seasons', seasonsRouteur);
app.use('/episode', episodeRouteur);
app.use('/episodes', episodesRouteur);
app.use('/history', historyRouteur);
app.use('/comments', commentsRouteur);


app.use("/", swaggerUi.serve, swaggerUi.setup(apiJSON));

app.listen(PORT, () => {
    console.log(`Mon application roule sur http://localhost:${PORT}`);
});
