import express from 'express';

const app = express();


const PORT = process.env.PORT || 5000;

app.listen(PORT, err => {
    if (err) console.log(err);
    
    console.log(`App on port ${PORT}`);
});