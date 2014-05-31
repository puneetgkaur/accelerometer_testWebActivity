var fs=require('fs');

var dir='./sugar-web';
var data={};
var path = require('path');
var filePath2 = path.join(__dirname + '/new.js');

fs.readdir(dir,function(err,files){
    if (err) console.log(err);
    files.forEach(function(file){

	console.log(file);

	var filePath1 = path.join(__dirname + "/sugar-web/"+file);
	fs.stat(filePath1,function(obj_file){
		console.log(obj_file.isFile);
	})
	

	fs.readFile(filePath1, 'utf8', function (err,data) {
	  if (err) {
	    return console.log(err);
	  }
	  console.log(data);
	});

	fs.readFileSync(filePath1).toString().split('\n').forEach(function (line) { 
	   	console.log(line);
		fs.appendFileSync(filePath2, line.toString() + "\n");
	});

    });
});
