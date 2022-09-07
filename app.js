const express = require('express');

const apiJSON = require('./Documentation/api');
const swaggerUi = require('swagger-ui-express');

const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const personnesRouter = require('./routes/personnes');
const connexionRouter = require('./routes/connexion');
const ippesRouter = require('./routes/ippes');
const crimesRouter = require('./routes/crimes');
const conditionsRouter = require('./routes/conditions');
const objetsRouter = require('./routes/objets');
const armesRouter = require('./routes/armes');
const valeursRouter = require('./routes/valeurs');
const authMiddleware  = require('./modules/authMiddleware');


app.use(cors());
app.use(express.json());

app.use('/personnes', authMiddleware, personnesRouter);
app.use('/connexion', connexionRouter);
app.use('/ippes', authMiddleware, ippesRouter);
app.use('/crimes', authMiddleware, crimesRouter);
app.use('/conditions', authMiddleware, conditionsRouter);
app.use('/objets', authMiddleware, objetsRouter);
app.use('/armes', authMiddleware, armesRouter);
app.use('/valeurs', authMiddleware, valeursRouter);

app.use("/", swaggerUi.serve, swaggerUi.setup(apiJSON));

app.listen(PORT, () => {
    console.log(`Mon application roule sur http://localhost:${PORT}`);
});
