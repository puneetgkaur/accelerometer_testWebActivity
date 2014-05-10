var activity_cordova;

define(function (require) {
    var activity = require("sugar-web/activity/activity");

    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {
 
        // Initialize the activity.
        activity.setup();
	activity_cordova = activity.cordova;
	
	//call to cordova to tell native interface ready

    });

});


