import express from 'express';
import db from './config/db';

const app = express();

// Database

db();

const PORT = process.env.PORT || 5000;

app.listen(PORT, err => {
    if (err) console.log(err);
    
    console.log(`App on port ${PORT}`);
});