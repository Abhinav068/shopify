const express = require('express');
const Shopify = require('shopify-api-node');

const app = express();
require('dotenv').config();
const PORT = 8000;

app.get('/shopify', (req, res) => {
    res.sendFile(__dirname + '/view/test.html')
})


const shopify = new Shopify({
  shopName: 'abhinav-store',
  apiKey: process.env.SHOPIFY_API_KEY,
  password: process.env.SHOPIFY_API_SECRET
});


shopify.on('callLimits', (limits) => console.log(limits));

shopify.order
  .list({ limit: 5 })
  .then((orders) => console.log(orders))
  .catch((err) => console.error(err));



app.listen(PORT, () => {
    console.log(`running at ${PORT}`);
})