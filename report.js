const newman = require('newman');
require('dotenv').config();
 
newman.run({
    //collection:`https://api.postman.com/collections/42658049-29f0185e-f676-41f7-9c24-87b2b04fcbd5?access_key=${process.env.access_key}`,
    collection:require('./collection/dmoney-user-api-collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
