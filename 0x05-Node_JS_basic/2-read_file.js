const fs = require('fs');
const countStudents = (path) => {
    const data = fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            throw new Error("Cannot load the database");
        }
        const lines = data.split("\n");
        const num = lines.length - 1;
        const objs = {};
        
        for(let i=1; i < lines.length; i++) {
            const val = lines[i].split(",");
            const firstname = val[0];
            const temp = val[3].replace(/\r/g, '')
            if(objs[temp]) {
                objs[temp].push(firstname);
            } else {
                objs[temp] = [firstname];
            }
        }
        
        console.log("Number of students: "+ num)
        for(const obj in objs) {
            const len = objs[obj].length;
            const list = objs[obj].join(", ");
            console.log(`Number of students in ${obj}: ${len}. List: ${list}`);
        }
    })

}

module.exports = countStudents;