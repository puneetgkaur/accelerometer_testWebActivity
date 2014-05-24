var fs = require('fs');
var path = require('path');
var filePath1 = path.join(__dirname + '/sugar-web/env.js');
var filePath2 = path.join(__dirname + '/sugar-web/env1.js');

fs.readFileSync(filePath1).toString().split('\n').forEach(function (line) { 
    console.log(line);
    fs.appendFileSync(filePath2, line.toString() + "\n");
});
