const express = require('express');
const routers = require('./src/routes/pessoa');

const app = express();

app.use(express.json());

app.use(routers);  

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


