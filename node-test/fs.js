const fs = require('fs');
const rs = fs.createReadStream('./file.txt');

rs.on('open', () => {
    console.log('File opened');
});