import express from 'express';
import db from './config/db';
import middlewaresConfig from './config/middlewares';
import { MeetupRoutes } from './modules';

const app = express();

// Database

db();

// middleware

middlewaresConfig(app);

// if the url has api, send req to meetup routes
app.use('/api', [MeetupRoutes]);

const PORT = process.env.PORT || 5000;

app.listen(PORT, err => {
    if (err) console.log(err);
    
    console.log(`App on port ${PORT}`);
});