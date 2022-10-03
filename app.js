const express = require('express');

const apiJSON = require('./Documentation/swagger');
const swaggerUi = require('swagger-ui-express');

const app = express();
const cors = require('cors');

const request = require('./database/request');


const PORT = process.env.PORT || 3000;
const authRouteur = require('./routes/auth');


app.use(cors());
app.use(express.json());

app.use('/auth', authRouteur);




app.get('/show/:id', async (req, res) => {
    try {
        const id = req.params.id
        const resultat = await request.getShowById(id)

        if(resultat.length!=0)
		{   
			console.log(resultat);
            console.log(id);
			res.send(resultat);
		} else {
			res.send({result : 'error'});
		}
	} catch (error) {
		res.status(500).json(error.message);
	}
});

app.get('/shows', async (req, res) => {
    try {
        const id = req.params.id
        const resultat = await request.getShows()

        if(resultat.length!=0)
		{   
			console.log(resultat);
            console.log(id);
			res.send(resultat);
		} else {
			res.send({result : 'error'});
		}
	} catch (error) {
		res.status(500).json(error.message);
	}
});

app.get('/season/:id', async (req, res) => {
    try {
        const id = req.params.id
        const resultat = await request.getSeasons(id)

        if(resultat.length!=0)
		{   
			console.log(resultat);
            console.log(id);
			res.send(resultat);
		} else {
			res.send({result : 'error'});
		}
	} catch (error) {
		res.status(500).json(error.message);
	}
});


app.use("/", swaggerUi.serve, swaggerUi.setup(apiJSON));

app.listen(PORT, () => {
    console.log(`Mon application roule sur http://localhost:${PORT}`);
});
