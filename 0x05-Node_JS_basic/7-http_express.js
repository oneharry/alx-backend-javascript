const express = require('express');
const fs = require('fs').promises;
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
    res.send('Hello Holberton School!\n');
});

app.get('/students', async (req, res) => {
    const databasePath = 'database.csv';
    
    try {
        const results = await countStudents(databasePath);
        res.send(results.join('\n'));
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;