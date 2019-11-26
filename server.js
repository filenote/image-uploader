const express = require('express');
const app = express();
const bodyParser = require('body-parser')
require('dotenv').config()

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
        res.json({});
    }
    next();
})

app.use("/api/image", require('./routes/api/image'))

app.listen(process.env.SERVER_PORT, () => console.log(`Server has been started on ${process.env.SERVER_PORT}`))