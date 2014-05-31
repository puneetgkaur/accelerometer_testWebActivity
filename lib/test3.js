var fs=require('fs');

var path = require('path');
var filePath1 = path.join(__dirname + '/sugar-web/activity/activity.js');


// between square brakets \[(.*?)\]

fs.readFile(filePath1, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
 var extract1 = data.match("\[(.*?)\]");
console.log("extract1.index="+extract1.index);

i=extract1.index;
while(data[i]!=']')i++;
end_define_index=i;
console.log(end_define_index);


// now copy from data from extract1.index till end_define_index from data to a new string variable using the javascript slice string function

var module_dependencies1 = data.slice(extract1.index+2,end_define_index);
//console.log(module_dependencies1);

str2=module_dependencies1.split("\"");
console.log("string="+str2);

i=0;
var cordova_sugardependencies = "\n";

while(i<str2.length)
{
	var pattern=new RegExp("\w+");
	if(pattern.test(str2[i]))
	{
	 console.log(str2[i]);
	 str3=str2[i].split("/");
	 console.log(str3);
	 console.log(str3.length);
	 console.log(str3[str3.length-1]);
	 cordova_sugardependencies=cordova_sugardependencies.concat(str3[str3.length-1]+"=");
	 cordova_sugardependencies=cordova_sugardependencies.concat(str2[i]+"\n");
	 console.log(cordova_sugardependencies);
	}
	i++;
}



/*
console.log(module_dependencies1.length);
while(i<module_dependencies1.length)
{

	console.log(module_dependencies1[i]);
	ch=module_dependencies1[i];
	if(ch=='"'&&flag==0)
	{
		l++;m=0;
		flag=1;
	}
	else if(flag==1&&ch=='"')
	{
		flag=0;
	}
	if(flag==1)
	str2[l][m++]=module_dependencies1[i];
	 i++;
}
*/
//console.log(extract1);
});
