const express = require('express');
const path = require ('path');
const PORT = 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log('Listening on port: ', PORT); 
})