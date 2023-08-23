const express = require('express');
const itemsrouter = require('./items/items.router');


const app = express();

const PORT = process.env.port || 3000;
const HOSTNAME = 'localhost';

app.use(express.json()); 

app.use('/items', itemsrouter);

app.get('*', (req, res) => {
    res.status(404).json({
        data: null,
        error: 'Route not found'
    })
})


app.listen(PORT, HOSTNAME, () => console.log(`Server is listening on ${HOSTNAME}: ${PORT}`));