const express = require('express');

const apiJSON = require('./Documentation/swagger');
const swaggerUi = require('swagger-ui-express');

const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const authRouteur = require('./routes/auth');


app.use(cors());
app.use(express.json());

app.use('/auth', authRouteur);


app.use("/", swaggerUi.serve, swaggerUi.setup(apiJSON));



app.listen(PORT, () => {
    console.log(`Mon application roule sur http://localhost:${PORT}`);
});
