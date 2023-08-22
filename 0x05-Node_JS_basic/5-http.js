const http = require('http')
const fs = require('fs');
const countStudents = require('./3-read_file_async');


const app = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!\n');
    } else if (req.url === '/students') {
        const databasePath = 'database.csv';
        countStudents(databasePath)
            .then(results => {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(results.join('\n'));
            })
            .catch(error => {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end(error.message);
            });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found\n');
    }
});

app.listen(1245, () => {
    console.log('Server is running on port 1245');
});

module.exports = app;