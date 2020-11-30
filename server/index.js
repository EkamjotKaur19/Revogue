// TODO: these might not be needed if next TODO gets fixed
// import dotenv from 'dotenv';
// import {} from 'dotenv/config';

// TODO: fix this import
// import './env.js';

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// dotenv.config();
const app = express();

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());


// const CONNNECTION_URL = process.env.CONNNECTION_URL;
// TODO: need to change this string
// TODO: IMPORTANT!! DO NOT COMMIT WITH THIS CONNECTION_URL
// CHANGE IT BACK TO EMPTY STRING BEFORE ANY COMMIT MESSAGE
const CONNNECTION_URL = ''
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log('Error: ' + error.message))

mongoose.set('useFindAndModify', false);