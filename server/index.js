// Built-in/third party imports
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import passport from 'passport';

// Relative imports
import passportUse from './config/passport.js';
import userRoutes from './routes/users.js';
import productRoutes from './routes/products.js';

dotenv.config();
const app = express();

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

// Passport middleware
app.use(passport.initialize());
passportUse(passport);

// Routes

app.get('/', (req, res) => {
    res.send('Welcome to Thrift Shop API');
});
app.use('/users', userRoutes);
app.use('/products', productRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log('Error: ' + error.message))

mongoose.set('useFindAndModify', false);
