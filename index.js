var fs = require('fs');

// index.js
module.exports = () => {
    const data = { list: false };

    fs.readFile('db.json', 'utf8', function (err, result) {
        if (err) {
          return console.log(err);
        } else {
            data.list = result;
            return data;
        }
    });
}