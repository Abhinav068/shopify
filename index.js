const express = require('express');

const app = express();
require('dotenv').config();
const PORT = 8000;

app.get('/shopify', (req, res) => {
    res.sendFile(__dirname + '/view/test.html')
})


app.listen(PORT, () => {
    console.log(`running at ${PORT}`);
})