const express = require('express');
const { postgresConnection } = require('./postgreSQL/postgreSQL');

const app = express();
const port = 8000;

app.listen(port, () => {
    console.log(`Server is Running in ${port}`);
});

postgresConnection();