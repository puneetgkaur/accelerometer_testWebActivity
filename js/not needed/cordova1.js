//format : 
//navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);
    

var navigator = {
   accelerometer : {
	getCurrentAcceleration : function (accelerometerSuccess,accelerometerError){
	  console.log("Reached in cordova.js : navigator.accelerometer.getCurrentAcceleration()");
	  cordova.exec(accelerometerSuccess,accelerometerError,"accelerometer","getCurrentAcceleration",[]);
	}
   }
};

var cordova = {
	exec : function (successhandler,errorhandler,className,functionName,parameters){

	console.log("Reached in cordova.js : cordova.exec()");
	var arguments_json = {
		"className":className,
		"functionName":functionName,
		"parameters":parameters,
	};
	console.log(className,functionName,parameters);
	activity_cordova(successhandler,errorhandler,className,functionName,parameters);

	}
}
