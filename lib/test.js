
var fs = require('fs'),
    readline = require('readline'),
    stream = require('stream');
var path = require('path');
var filePath = path.join(__dirname + '/sugar-web/env.js');
var instream = fs.createReadStream(filePath);
var outstream = new stream;
outstream.readable = true;
outstream.writable = true;

var rl = readline.createInterface({
    input: instream,
    output: outstream,
    terminal: false
});

rl.on('line', function(line) {
    console.log(line);
    //Do your stuff ...
    //Then write to outstream
    rl.write(line);
});
