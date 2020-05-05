const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 1800;

app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.get('/order/:orderId', async (req, res) => {
    console.log("Getting order " + req.params.orderId);
    let order = {
        id: req.params.orderId,
        product: 'mock-product',
        customer: 'mock-orderer',
        price: 1234
    };
    res.send(order);
});

app.post('/order/:orderId/send', async (req, res) => {
    console.log("Sending order " + req.params.orderId);
    res.send("OK");
});

app.post('/order/:orderId/cancel', async (req, res) => {
    console.log("Cancelling order " + req.params.orderId);
    res.send("OK");
});

app.post('/order/:orderId/bill', async (req, res) => {
    console.log("Billing order " + req.params.orderId);
    res.send("OK");
});